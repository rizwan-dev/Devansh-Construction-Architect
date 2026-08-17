'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/lib/types'
import { Building2, Home, ShoppingBag, Search, Eye, MapPin } from 'lucide-react'

const categoryIcons: Record<string, typeof Building2> = {
  All: Building2,
  Residential: Home,
  Commercial: ShoppingBag,
}

/**
 * Filtering/search UI for the projects grid.
 *
 * Projects are passed in from the server component so the full list is already
 * present in the HTML (and therefore indexable) before this hydrates.
 */
export default function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))),
  ]

  const term = searchTerm.trim().toLowerCase()
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch =
      !term ||
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.location.toLowerCase().includes(term)
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Filter and search */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <label htmlFor="project-search" className="sr-only">
                Search projects
              </label>
              <input
                id="project-search"
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = categoryIcons[category] || Building2
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <p className="text-gray-600">
            Showing{' '}
            <span className="font-semibold text-primary-600">{filteredProjects.length}</span>{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
            {selectedCategory !== 'All' && (
              <>
                {' '}
                in <span className="font-semibold text-primary-600">{selectedCategory}</span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200 flex flex-col"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="relative block h-64 overflow-hidden"
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100" />
                    )}

                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    {project.year && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <span className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Project</span>
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      <Link href={`/projects/${project.id}`}>{project.title}</Link>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {project.location && (
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
