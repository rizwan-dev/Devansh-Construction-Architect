// Contact form submissions.
// Persisted via lib/store.ts — Vercel KV in production, local JSON files in dev.
// (Previously in-memory, which did not survive restarts / serverless instances.)

import { readDoc, writeDoc } from './store'
import type { ContactSubmission } from './types'

export type { ContactSubmission } from './types'

const SUBMISSIONS_KEY = 'submissions'

async function getSubmissions(): Promise<ContactSubmission[]> {
  return readDoc<ContactSubmission[]>(SUBMISSIONS_KEY, [])
}

async function saveSubmissions(submissions: ContactSubmission[]): Promise<void> {
  await writeDoc(SUBMISSIONS_KEY, submissions)
}

export const addContactSubmission = async (
  submission: Omit<ContactSubmission, 'id' | 'timestamp' | 'status'>
): Promise<ContactSubmission> => {
  const submissions = await getSubmissions()
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
    timestamp: new Date().toISOString(),
    status: 'new',
  }
  submissions.unshift(newSubmission)
  await saveSubmissions(submissions)
  return newSubmission
}

export const getAllSubmissions = async (): Promise<ContactSubmission[]> => {
  return getSubmissions()
}

export const getSubmissionById = async (id: string): Promise<ContactSubmission | null> => {
  const submissions = await getSubmissions()
  return submissions.find((s) => s.id === id) || null
}

export const updateSubmissionStatus = async (
  id: string,
  status: ContactSubmission['status']
): Promise<boolean> => {
  const submissions = await getSubmissions()
  const submission = submissions.find((s) => s.id === id)
  if (!submission) return false
  submission.status = status
  await saveSubmissions(submissions)
  return true
}

export const deleteSubmission = async (id: string): Promise<boolean> => {
  const submissions = await getSubmissions()
  const next = submissions.filter((s) => s.id !== id)
  if (next.length === submissions.length) return false
  await saveSubmissions(next)
  return true
}

export const getSubmissionStats = async () => {
  const submissions = await getSubmissions()
  return {
    total: submissions.length,
    new: submissions.filter((s) => s.status === 'new').length,
    read: submissions.filter((s) => s.status === 'read').length,
    replied: submissions.filter((s) => s.status === 'replied').length,
  }
}
