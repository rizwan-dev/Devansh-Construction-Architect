import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Architectural & Construction Services in Pune',
  description:
    'Architectural design, 3D visualisation, PMC/PCMC/PMRDA sanction drawings, Vastu consultation, civil construction, MEP work, landscaping and turnkey lock & key projects in Pune.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Architectural & Construction Services',
    description:
      'End-to-end design and construction services in Pune — from sanction drawings to turnkey delivery.',
    url: '/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
