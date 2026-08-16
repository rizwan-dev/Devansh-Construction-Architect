import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts, formatDate } from '@/lib/blog'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction & Architecture Blog — Pune Area Guides',
  description:
    'Practical guides on building in Pune from Devansh Constro & Architect — approvals, costs, timelines and area guides for Lohegaon, Kharadi and east Pune.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Construction & Architecture Blog | Devansh Constro & Architect',
    description:
      'Guides on construction and architectural design in Pune — Lohegaon, Kharadi and east Pune.',
    url: '/blog',
    type: 'website',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    description:
      'Guides on construction and architectural design in Pune, including Lohegaon and Kharadi.',
    url: `${SITE_URL}/blog`,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Construction &amp; Architecture <span className="text-primary-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Practical guidance on building in Pune — approvals, costs, timelines and area guides
              for Lohegaon, Kharadi and the eastern corridor, written from our own project
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {post.area}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-semibold text-sm group/link"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Planning a project in Pune?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get a straight assessment of what your plot supports, what approvals you will need, and
            what the build realistically involves.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
