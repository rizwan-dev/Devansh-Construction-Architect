import { NextRequest, NextResponse } from 'next/server'
import { 
  getAllSubmissions, 
  getSubmissionStats, 
  updateSubmissionStatus, 
  deleteSubmission 
} from '@/lib/contactStore'
import { checkAdminAuth } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      )
    }
    
    const submissions = await getAllSubmissions()
    const stats = await getSubmissionStats()

    return NextResponse.json({
      submissions,
      stats
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // Check admin authentication
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      )
    }

    const { id, status } = await request.json()

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const success = await updateSubmissionStatus(id, status)

    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Status updated successfully' 
      })
    } else {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Check admin authentication
    if (!checkAdminAuth(request)) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 401 }
      )
    }

    const { id } = await request.json()

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      )
    }

    const success = await deleteSubmission(id)

    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Submission deleted successfully' 
      })
    } else {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}
