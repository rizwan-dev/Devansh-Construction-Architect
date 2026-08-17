import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectsBrowser from '@/components/ProjectsBrowser'
import { getAllProjects } from '@/lib/db'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { ArrowRight } from 'lucide-react'

// Projects live in KV and are edited from the admin, so render on request.
export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  const areas = Array.from(
    new Set(
      projects
        .map((p) => p.location?.split(',')[0]?.trim())
        .filter((a): a is string => Boolean(a))
    )
  )

  const itemListLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_NAME} — Project Portfolio`,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${SITE_URL}/projects/${p.id}`,
    })),
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Project Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {projects.length} completed and ongoing residential and commercial projects across
              Pune and Maharashtra — apartment buildings, villas, row houses and commercial
              developments.
            </p>
            {areas.length > 0 && (
              <p className="text-gray-600">
                Areas we have built in:{' '}
                <span className="text-gray-800 font-medium">{areas.join(' · ')}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Server-rendered list + client-side filtering */}
      <ProjectsBrowser projects={projects} />

      {/* Stats */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '150+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{s.value}</div>
                <div className="text-primary-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let us bring your vision to life with our expertise in architectural design and
            construction. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
