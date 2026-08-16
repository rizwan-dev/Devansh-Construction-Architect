import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects — Residential & Commercial Portfolio in Pune',
  description:
    'Explore completed residential and commercial construction projects by Devansh Constro & Architect across Pune, including Dhanori, Kharadi, Lohegaon, Awhalwadi, Manjiri and Junnar.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Project Portfolio — Devansh Constro & Architect',
    description:
      'Residential towers, row houses and commercial complexes delivered across Pune and Maharashtra.',
    url: '/projects',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
