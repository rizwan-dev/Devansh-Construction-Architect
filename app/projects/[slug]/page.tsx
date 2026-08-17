import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllProjects, getProjectById } from '@/lib/db'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { MapPin, Calendar, Ruler, Building2, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'

// Projects are edited from the admin (KV). Cache the rendered page and
// revalidate every 60s: near-static TTFB for visitors and crawlers, while
// admin edits still appear within a minute. The /api/projects route stays
// dynamic, so the admin panel itself always reads live data.
export const revalidate = 60

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectById(params.slug)
  if (!project) return { title: 'Project Not Found' }

  // Only append the location when the title doesn't already name that area,
  // otherwise titles read "Galaxy Tower - Dhanori in Dhanori, Pune".
  const area = project.location?.split(',')[0]?.trim()
  const titleMentionsArea =
    !!area && project.title.toLowerCase().includes(area.toLowerCase())
  const where = project.location && !titleMentionsArea ? ` in ${project.location}` : ''

  // Lead with the project's own description — that's the part worth showing in
  // a search result — then add location context only if there is room left
  // inside the length Google actually renders.
  const suffix = project.location
    ? ` ${project.category} project in ${project.location} by ${SITE_NAME}.`
    : ` ${project.category} project by ${SITE_NAME}.`
  const base = project.description.trim()
  const description =
    base.length + suffix.length <= 158
      ? `${base}${suffix}`
      : base.length > 158
      ? `${base.slice(0, 155).trimEnd()}…`
      : base
  const trimmed = description

  return {
    title: `${project.title}${where}`,
    description: trimmed,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.title}${where} | ${SITE_NAME}`,
      description: trimmed,
      url: `/projects/${project.id}`,
      type: 'article',
      images: project.image ? [{ url: project.image, alt: project.title }] : undefined,
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectById(params.slug)
  if (!project) notFound()

  const all = await getAllProjects()
  const area = project.location?.split(',')[0]?.trim()

  // Prefer projects in the same area, then same category.
  const related = all
    .filter((p) => p.id !== project.id)
    .sort((a, b) => {
      const aScore =
        (area && a.location?.includes(area) ? 2 : 0) + (a.category === project.category ? 1 : 0)
      const bScore =
        (area && b.location?.includes(area) ? 2 : 0) + (b.category === project.category ? 1 : 0)
      return bScore - aScore
    })
    .slice(0, 3)

  const facts = [
    { icon: Building2, label: 'Category', value: project.category },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: Calendar, label: 'Year', value: project.year },
    { icon: Ruler, label: 'Size', value: project.size },
  ].filter((f) => Boolean(f.value))

  const projectLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    ...(project.image ? { image: new URL(project.image, SITE_URL).toString() } : {}),
    creator: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/projects/${project.id}`,
    ...(project.location ? { locationCreated: { '@type': 'Place', name: project.location } } : {}),
    ...(project.year ? { dateCreated: project.year } : {}),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/projects` },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projects/${project.id}`,
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />

      {/* Header */}
      <section className="relative pt-24 pb-10 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-primary-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/projects" className="hover:text-primary-600">
                    Projects
                  </Link>
                </li>
              </ol>
            </nav>

            <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {project.title}
            </h1>
            {project.location && (
              <p className="flex items-center gap-2 text-lg text-gray-600">
                <MapPin className="w-5 h-5 text-primary-600" />
                {project.location}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Image */}
      {project.image && (
        <div className="container-custom">
          <div className="max-w-5xl mx-auto mb-10">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category.toLowerCase()} project${
                  project.location ? ` in ${project.location}` : ''
                }`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Details */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{project.description}</p>

              {project.features.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Fact panel */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 lg:sticky lg:top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Project Details</h2>
                <dl className="space-y-4">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <f.icon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-gray-500">{f.label}</dt>
                        <dd className="text-gray-900 font-medium">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <Link
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  <span>Enquire About This</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>

          <div className="max-w-5xl mx-auto mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {area ? `More projects near ${area}` : 'More of our projects'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/projects/${r.id}`}
                    className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-40 bg-gray-100">
                      {r.image && (
                        <Image
                          src={r.image}
                          alt={r.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                        {r.title}
                      </h3>
                      {r.location && (
                        <p className="text-sm text-gray-500 mt-1">{r.location}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Planning something similar{area ? ` in ${area}` : ''}?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and an honest assessment of what your plot supports and what the
            build will involve.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
