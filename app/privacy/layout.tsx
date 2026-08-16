import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Devansh Constro & Architect collects, uses, shares and protects the personal and project information you share with us.',
  alternates: { canonical: '/privacy' },
  openGraph: { title: 'Privacy Policy', url: '/privacy' },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
