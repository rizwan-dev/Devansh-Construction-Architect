import { NextRequest, NextResponse } from 'next/server'
import { seedDefaults } from '@/lib/db'
import { checkAdminAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

// POST /api/admin/seed        -> seed defaults into empty keys (idempotent)
// POST /api/admin/seed?force=1 -> overwrite projects + contact with defaults
export async function POST(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized access' }, { status: 401 })
  }
  try {
    const force = ['1', 'true'].includes(
      (request.nextUrl.searchParams.get('force') || '').toLowerCase()
    )
    const result = await seedDefaults(force)
    return NextResponse.json({ success: true, force, ...result })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json({ error: 'Failed to seed data' }, { status: 500 })
  }
}
