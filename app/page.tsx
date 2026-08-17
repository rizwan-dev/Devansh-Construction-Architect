'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import RippleButton from '@/components/RippleButton'
import { useContactInfo } from '@/lib/useContactInfo'
import CallButtons from '@/components/CallButtons'
import { parsePhones, telHref } from '@/lib/phone'
import { 
  Building2, 
  PenTool, 
  Home, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Mail
} from 'lucide-react'

export default function HomePage() {
  const contact = useContactInfo()

  const services = [
    {
      icon: PenTool,
      title: 'Architectural Design',
      href: '/services/architectural-design',
      description: 'Innovative architectural designs with 3D visualizations, detailed drawings, and Vastu consultation for your dream projects.',
      features: ['3D Design & Visualization', 'Vastu Consultation', 'PMC Sanction Drawings', 'Renovation Plans']
    },
    {
      icon: Building2,
      title: 'Construction Services',
      href: '/services/civil-construction',
      description: 'Complete construction solutions from planning to execution with quality materials and skilled craftsmanship.',
      features: ['Civil Construction', 'MEP Work', 'Exterior Landscaping', 'Lock & Key Projects']
    },
    {
      icon: Home,
      title: 'Project Management',
      href: '/services/lock-and-key-projects',
      description: 'Professional project management services ensuring timely delivery and quality control throughout the construction process.',
      features: ['Cost Estimation', 'Timeline Scheduling', 'Quality Control', 'Regular Updates']
    }
  ]

  const stats = [
    { icon: Building2, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '150+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' }
  ]

  const features = [
    'Quality Construction Materials',
    'Experienced Team of Professionals',
    'On-Time Project Delivery',
    'Transparent Pricing',
    'Post-Construction Support',
    'Modern Design Solutions'
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="New Vision for Better Living"
        subtitle="Devansh Constro & Architect"
        description="We deliver exceptional architectural designs and construction services that transform your vision into reality. From concept to completion, we ensure quality, innovation, and client satisfaction."
        ctaText="Get Free Consultation"
        ctaLink="/contact"
        showStats={true}
      />

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Services"
            subtitle="What We Do"
            description="We offer comprehensive architectural and construction services to meet all your building needs with professional expertise and innovative solutions."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Why Choose Devansh Constro?"
                subtitle="Our Commitment"
                description="We are committed to delivering excellence in every project with our experienced team, quality materials, and client-focused approach."
                center={false}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="/about"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Site"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
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
              Get a free consultation and let our experts help you bring your architectural vision to life with quality construction services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CallButtons
                phone={contact.phone}
                label="Get Free Consultation"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-primary-600 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex items-center justify-center space-x-3 px-4 py-2">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-primary-100 flex flex-wrap gap-x-2">
                  {parsePhones(contact.phone).map((n) => (
                    <a key={n} href={telHref(n)} className="hover:underline">
                      {n}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href={`mailto:${contact.email}`} className="flex items-center justify-center space-x-3 hover:bg-primary-700 rounded-lg px-4 py-2 transition-colors duration-200">
              <Mail className="w-5 h-5" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-primary-100">{contact.email}</div>
              </div>
            </a>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="font-semibold">Visit Us</div>
                <div className="text-sm text-primary-100">{contact.addressShort}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
