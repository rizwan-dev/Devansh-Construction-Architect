import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing use of the Devansh Constro & Architect website, enquiries, quotations, statutory approvals, project timelines and dispute resolution.',
  alternates: { canonical: '/terms' },
  openGraph: { title: 'Terms of Service', url: '/terms' },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
