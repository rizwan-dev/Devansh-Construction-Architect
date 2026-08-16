'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import RippleButton from '@/components/RippleButton'
import { useContactInfo } from '@/lib/useContactInfo'
import {
  PenTool, 
  Building2, 
  Home, 
  Map, 
  FileText, 
  Users, 
  Wrench, 
  Palette,
  Zap,
  Droplets,
  TreePine,
  Lock,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react'


export default function ServicesPage() {
  const contact = useContactInfo()

  const architecturalServices = [
    {
      icon: PenTool,
      title: 'Conceptual Design',
      description: 'Initial layouts, sketches, and ideas based on client needs and requirements. We create innovative concepts that align with your vision and budget.',
      features: ['Site Analysis', 'Initial Sketches', 'Concept Development', 'Client Presentations']
    },
    {
      icon: Map,
      title: 'Detailed Drawings & 3D Designs',
      description: 'Comprehensive floor plans, elevations, sections, and 3D visualizations that bring your project to life with accurate technical details.',
      features: ['Floor Plans', 'Elevations & Sections', '3D Visualizations', 'Technical Drawings']
    },
    {
      icon: Users,
      title: 'Vastu Consultation',
      description: 'Expert Vastu guidance to ensure positive energy flow and harmony in your living or working spaces according to ancient principles.',
      features: ['Site Analysis', 'Layout Planning', 'Remedial Measures', 'Energy Optimization']
    },
    {
      icon: Palette,
      title: 'Renovation & Remodeling Plans',
      description: 'Professional redesigning of existing spaces to enhance functionality, aesthetics, and value while preserving structural integrity.',
      features: ['Space Planning', 'Design Optimization', 'Material Selection', 'Timeline Planning']
    },
    {
      icon: Building2,
      title: 'Architectural Planning',
      description: 'Complete 2D/3D model design, exterior design, and structural design services for residential and commercial projects.',
      features: ['2D/3D Modeling', 'Exterior Design', 'Structural Design', 'Landscape Planning']
    },
    {
      icon: FileText,
      title: 'PMC, PCMC, PMRDA Sanction Drawings',
      description: 'Professional sanction drawings and documentation for PMC, PCMC, and PMRDA approvals ensuring compliance with local regulations.',
      features: ['Regulatory Compliance', 'Documentation', 'Approval Process', 'Liaison Services']
    }
  ]

  const constructionServices = [
    {
      icon: FileText,
      title: 'Project Planning & Estimation',
      description: 'Comprehensive cost estimation, BOQ preparation, and timeline scheduling to ensure accurate project planning and budget control.',
      features: ['Cost Estimation', 'BOQ Preparation', 'Timeline Scheduling', 'Budget Planning']
    },
    {
      icon: Building2,
      title: 'Civil Construction',
      description: 'Complete civil construction services including foundations, structure, masonry, plastering, flooring, and finishing work.',
      features: ['Foundation Work', 'Structural Construction', 'Masonry & Plastering', 'Flooring & Finishing']
    },
    {
      icon: Zap,
      title: 'MEP Work',
      description: 'Professional Mechanical, Electrical, and Plumbing installation services ensuring efficient and safe building systems.',
      features: ['Electrical Systems', 'Plumbing Installation', 'HVAC Systems', 'Fire Safety Systems']
    },
    {
      icon: TreePine,
      title: 'Exterior Work',
      description: 'Comprehensive exterior services including landscaping, boundary walls, exterior painting, and waterproofing solutions.',
      features: ['Landscaping', 'Boundary Walls', 'Exterior Painting', 'Waterproofing']
    },
    {
      icon: Lock,
      title: 'Lock & Key Construction',
      description: 'Complete turnkey construction services where we handle everything from design to final handover, ensuring hassle-free experience.',
      features: ['Turnkey Solutions', 'End-to-End Service', 'Quality Assurance', 'Timely Delivery']
    },
    {
      icon: Wrench,
      title: 'Labor Rate Construction',
      description: 'Flexible labor-only construction services where you provide materials and we provide skilled manpower and project management.',
      features: ['Skilled Labor', 'Project Management', 'Quality Control', 'Flexible Pricing']
    }
  ]

  const additionalServices = [
    {
      icon: FileText,
      title: 'Demarcation (Mojni)',
      description: 'Professional land demarcation and survey services for accurate property boundaries and legal compliance.'
    },
    {
      icon: FileText,
      title: 'Tax NOC & Clearances',
      description: 'Assistance with various NOC requirements including tax clearances and regulatory approvals.'
    },
    {
      icon: FileText,
      title: 'Airforce NOC',
      description: 'Specialized services for obtaining Airforce NOC and compliance with aviation zone regulations.'
    },
    {
      icon: Users,
      title: 'PMC, PCMC, PMRDA Liaisoning',
      description: 'Expert liaisoning services for PMC, PCMC, and PMRDA project approvals and regulatory compliance.'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your requirements, budget, and timeline to understand your vision.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed designs, plans, and 3D visualizations for your approval.'
    },
    {
      step: '03',
      title: 'Approval Process',
      description: 'We handle all necessary approvals and sanctions from relevant authorities.'
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Professional construction with regular updates and quality control measures.'
    },
    {
      step: '05',
      title: 'Handover',
      description: 'Final inspection, documentation, and smooth handover of your completed project.'
    }
  ]

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
                Comprehensive <span className="text-primary-600">Architectural & Construction</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From initial design concepts to final construction, we provide end-to-end solutions with professional expertise, 
                quality materials, and innovative approaches that exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <RippleButton
                  href={`tel:${contact.phone}`}
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </RippleButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architectural Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="🏛️ Architectural Services"
            subtitle="Design Excellence"
            description="Our architectural services combine creativity with functionality, delivering innovative designs that meet your needs and exceed your expectations."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {architecturalServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="🏗️ Construction Services"
            subtitle="Building Excellence"
            description="From foundation to finishing, our construction services ensure quality, durability, and timely delivery of your projects."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {constructionServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Additional Services"
            subtitle="Complete Solutions"
            description="We also provide specialized services to ensure your project meets all regulatory requirements and runs smoothly."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {additionalServices.map((service, index) => (
              <motion.a
                key={service.title}
                href="/contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white hover:bg-primary-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-400 block cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-600 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 text-sm leading-relaxed transition-colors duration-300">{service.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Process"
            subtitle="How We Work"
            description="We follow a systematic approach to ensure your project is completed efficiently, on time, and within budget."
            center={true}
          />
          
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-primary-200 -z-10" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Why Choose Our Services?"
                subtitle="Excellence Guaranteed"
                description="We deliver exceptional value through our expertise, quality materials, and commitment to client satisfaction."
                center={false}
              />
              
              <div className="space-y-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Experienced Team</h4>
                    <p className="text-gray-600 text-sm">Over 10 years of expertise in architecture and construction</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Materials</h4>
                    <p className="text-gray-600 text-sm">We use only the finest materials from trusted suppliers</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Timely Delivery</h4>
                    <p className="text-gray-600 text-sm">Projects completed on schedule with regular progress updates</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm">Transparent pricing with no hidden costs or surprises</p>
                  </div>
                </motion.div>
              </div>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Services"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
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
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and detailed quote for your architectural and construction needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <RippleButton href={`tel:${contact.phone}`} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </RippleButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
