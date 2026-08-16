import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllServices, getServiceBySlug } from '@/lib/services'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { CheckCircle, ArrowRight, ArrowLeft, Phone } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | ${SITE_NAME}`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: 'website',
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const related = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    serviceType: service.name,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Pune' },
      { '@type': 'AdministrativeArea', name: 'Maharashtra' },
    ],
    url: `${SITE_URL}/services/${service.slug}`,
    image: `${SITE_URL}${service.image}`,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  <li>
                    <Link href="/" className="hover:text-primary-600">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/services" className="hover:text-primary-600">
                      Services
                    </Link>
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">{service.tagline}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="bg-white border border-gray-300 hover:border-primary-400 text-gray-800 font-semibold px-7 py-3 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  View Our Projects
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            {service.intro.map((p) => (
              <p key={p} className="text-lg text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What&apos;s Included</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            What this service covers when you work with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatsIncluded.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all duration-300"
              >
                <CheckCircle className="w-7 h-7 text-primary-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">How It Works</h2>
          <ol className="space-y-6 max-w-3xl">
            {service.process.map((p, i) => (
              <li key={p.step} className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{p.step}</h3>
                  <p className="text-gray-600 leading-relaxed">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5 max-w-3xl">
            {service.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-200 transition-colors duration-200"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-start justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary-600 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-gray-600 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary-200 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-40">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-1">
                      {r.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{r.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to discuss your project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get a free consultation and an honest assessment of what your project involves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>All Services</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
