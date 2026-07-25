import { NextRequest, NextResponse } from 'next/server'
import { getContactInfo, updateContactInfo, ContactInfo } from '@/lib/db'
import { checkAdminAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

// GET is public — the website uses it to render contact details site-wide.
export async function GET() {
  try {
    return NextResponse.json({ contact: getContactInfo() })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 })
  }
}

// PUT — update contact info (admin only).
export async function PUT(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 })
  }
  try {
    const body = await request.json()

    const update: Partial<ContactInfo> = {}
    const stringFields: (keyof ContactInfo)[] = [
      'phone',
      'whatsapp',
      'email',
      'address',
      'addressShort',
      'mapEmbedUrl',
    ]
    for (const field of stringFields) {
      if (typeof body[field] === 'string') {
        // @ts-expect-error indexed assignment of known string keys
        update[field] = body[field].trim()
      }
    }

    if (Array.isArray(body.workingHours)) {
      update.workingHours = body.workingHours
        .filter((w: any) => w && (w.day || w.hours))
        .map((w: any) => ({ day: String(w.day || '').trim(), hours: String(w.hours || '').trim() }))
    }

    const contact = updateContactInfo(update)
    return NextResponse.json({ success: true, contact })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 })
  }
}
