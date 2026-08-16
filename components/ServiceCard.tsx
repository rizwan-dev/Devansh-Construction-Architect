'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  index?: number
  /** Where the card links to — normally the matching /services/<slug> page. */
  href?: string
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  index = 0,
  href = '/contact',
}: ServiceCardProps) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group bg-white hover:bg-primary-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary-400 relative overflow-hidden block cursor-pointer"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-primary-400 group-hover:bg-primary-600 rounded-full mr-3 flex-shrink-0 transition-colors duration-300" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Hover Arrow */}
        <div className="absolute top-8 right-8 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  )
}

export default ServiceCard
