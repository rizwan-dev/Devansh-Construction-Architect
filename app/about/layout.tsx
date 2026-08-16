import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Architecture & Construction Firm in Pune',
  description:
    'Learn about Devansh Constro & Architect: our story, values and experienced team delivering architectural design and quality construction across Pune, Maharashtra.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Devansh Constro & Architect',
    description:
      'Our story, mission and team — architectural design and construction professionals serving Pune.',
    url: '/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
