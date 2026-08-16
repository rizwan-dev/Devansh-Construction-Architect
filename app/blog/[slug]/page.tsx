import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts, getPostBySlug, formatDate, type Block } from '@/lib/blog'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight, Info } from 'lucide-react'

interface Props {
  params: { slug: string }
}

// Pre-render every post at build time.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {block.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {block.text}
        </h3>
      )
    case 'ul':
      return (
        <ul key={index} className="my-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-600 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'callout':
      return (
        <aside
          key={index}
          className="my-8 p-6 bg-primary-50 border border-primary-200 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-2">
            <Info className="w-5 h-5 text-primary-600 flex-shrink-0" />
            <h3 className="font-semibold text-primary-800">{block.title}</h3>
          </div>
          <p className="text-primary-900/80 leading-relaxed">{block.text}</p>
        </aside>
      )
    default:
      return (
        <p key={index} className="text-gray-600 leading-relaxed my-4">
          {block.text}
        </p>
      )
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    articleSection: post.category,
    about: post.area,
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />

      {/* Article header */}
      <section className="relative pt-24 pb-10 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-primary-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-primary-600">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>

            <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {post.area}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="container-custom">
        <div className="max-w-4xl mx-auto -mt-2 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Article body */}
      <article className="pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-primary-600 pl-5 mb-8">
              {post.excerpt}
            </p>

            {post.content.map(renderBlock)}

            {/* CTA */}
            <div className="mt-12 p-8 bg-gray-900 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Planning to build in {post.area}?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Talk to our team for a free consultation and an honest assessment of your plot,
                approvals and budget.
              </p>
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                More from our blog
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((r) => (
                  <article
                    key={r.slug}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    <Link href={`/blog/${r.slug}`} className="block relative h-44 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.image}
                        alt={r.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        <Link href={`/blog/${r.slug}`}>{r.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {r.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
