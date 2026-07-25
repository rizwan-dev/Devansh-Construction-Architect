'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/lib/db'
import { 
  Building2, 
  Home, 
  Factory, 
  ShoppingBag, 
  GraduationCap, 
  Filter,
  Search,
  Eye,
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react'


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/projects', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setProjects(d.projects || []))
      .catch(() => setProjects([]))
      .finally(() => setIsLoading(false))
  }, [])

  // Build the category list dynamically from the live projects.
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categoryIcons = {
    'All': Building2,
    'Residential': Home,
    'Commercial': ShoppingBag
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Project Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore our diverse portfolio of completed projects showcasing our expertise in residential 
                and commercial construction across Pune, including modern residential towers, 
                business hubs, and premium developments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons] || Building2
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
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

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary-600">{filteredProjects.length}</span> projects
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-primary-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-16">
              <div className="w-10 h-10 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading projects...</p>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>

                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
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
                </motion.div>
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

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let us bring your vision to life with our expertise in architectural design and construction. 
              Contact us today for a free consultation.
            </p>
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
