import { NextRequest, NextResponse } from 'next/server'
import {
  getAllProjects,
  addProject,
  updateProject,
  deleteProject,
  Project,
} from '@/lib/db'
import { checkAdminAuth } from '@/lib/auth'

// Ensure this route is always dynamic (reads from disk) and never statically cached.
export const dynamic = 'force-dynamic'

// GET is public — the website uses it to render the projects portfolio.
export async function GET() {
  try {
    return NextResponse.json({ projects: await getAllProjects() })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

function parseProjectPayload(body: any): Omit<Project, 'id'> | { error: string } {
  const { title, description, image, category, location, year, size } = body
  if (!title || !description || !category) {
    return { error: 'Title, description and category are required' }
  }

  // features may arrive as an array or a comma / newline separated string
  let features: string[] = []
  if (Array.isArray(body.features)) {
    features = body.features
  } else if (typeof body.features === 'string') {
    features = body.features
      .split(/[\n,]/)
      .map((f: string) => f.trim())
      .filter(Boolean)
  }

  return {
    title: String(title).trim(),
    description: String(description).trim(),
    image: String(image || '').trim(),
    category: String(category).trim(),
    location: String(location || '').trim(),
    year: String(year || '').trim(),
    size: String(size || '').trim(),
    features,
  }
}

// POST — create a new project (admin only).
export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 })
  }
  try {
    const body = await request.json()
    const parsed = parseProjectPayload(body)
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }
    const project = await addProject(parsed)
    return NextResponse.json({ success: true, project })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}

// PUT — update an existing project (admin only).
export async function PUT(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 })
  }
  try {
    const body = await request.json()
    const { id } = body
    if (!id) {
      return NextResponse.json({ error: 'Project id is required' }, { status: 400 })
    }
    const parsed = parseProjectPayload(body)
    if ('error' in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }
    const project = await updateProject(id, parsed)
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true, project })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

// DELETE — remove a project (admin only).
export async function DELETE(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 })
  }
  try {
    const { id } = await request.json()
    if (!id) {
      return NextResponse.json({ error: 'Project id is required' }, { status: 400 })
    }
    const success = await deleteProject(id)
    if (!success) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}
