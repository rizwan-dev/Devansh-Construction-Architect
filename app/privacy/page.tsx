'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useContactInfo } from '@/lib/useContactInfo'
import { parsePhones, telHref } from '@/lib/phone'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const contact = useContactInfo()

  const sections = [
    {
      title: 'Introduction',
      body: [
        'Devansh Constro & Architect ("we", "us", "our") is an architectural design and construction firm based in Pune, Maharashtra. We respect the privacy of our clients, prospective clients and website visitors.',
        'This Privacy Policy explains what information we collect, how we use it, and the choices available to you. It is published in accordance with the Information Technology Act, 2000 and the rules made thereunder, and reflects our approach to the Digital Personal Data Protection Act, 2023.',
      ],
    },
    {
      title: 'Information We Collect',
      body: [
        'Contact details you provide: your name, email address, phone number, subject and message submitted through our enquiry form, or shared with us over phone, email or WhatsApp.',
        'Project information: plot or site address, plot dimensions and survey details, existing structure details, indicative budget, preferred timeline, Vastu preferences, and any drawings, title or approval documents you choose to share with us for the purpose of design or estimation.',
        'Site records: photographs, measurements, site survey notes and progress images captured during site visits and during the execution of your project.',
        'Technical information: basic data your browser sends automatically, such as browser type, device type and the pages you visit on this website.',
        'We do not collect payment card details through this website.',
      ],
    },
    {
      title: 'How We Use Your Information',
      body: [
        'To respond to your enquiry, arrange site visits, prepare design proposals, cost estimates and quotations.',
        'To deliver the services engaged under your project agreement, including preparation of drawings, submission of sanction drawings to the concerned municipal or planning authority, procurement, and execution and supervision of construction work.',
        'To communicate project updates, schedules and payment milestones with you by phone, email or WhatsApp.',
        'To maintain our business, accounting and statutory records, and to comply with applicable law.',
      ],
    },
    {
      title: 'Consent',
      body: [
        'By submitting an enquiry or sharing project documents with us, you consent to the collection and use of that information for the purposes described in this policy.',
        'You may withdraw your consent at any time by writing to us. Please note that withdrawal of consent may prevent us from continuing to provide services that depend on that information, and it does not affect processing already carried out or records we are required by law to retain.',
      ],
    },
    {
      title: 'Sharing and Disclosure',
      body: [
        'We do not sell, rent or trade your personal information.',
        'We may share information strictly as necessary with: our architects, engineers, draughtsmen and site staff; structural, MEP and other specialist consultants engaged for your project; contractors, sub-contractors, vendors and material suppliers; and government or statutory authorities, including the municipal corporation or planning authority, where required for sanction, approval or compliance.',
        'We may also disclose information where required by law, court order, or a lawful request by a public authority.',
      ],
    },
    {
      title: 'Project Photographs and Publicity',
      body: [
        'We may photograph completed and ongoing projects and use those images on this website, in our portfolio, and in marketing material to showcase our work.',
        'Such images generally show the property and workmanship, and not our clients personally. If you do not wish images of your project to be used publicly, please inform us in writing and we will respect that request.',
      ],
    },
    {
      title: 'Data Retention',
      body: [
        'Enquiries are retained for as long as they remain relevant to an ongoing or prospective project, and for a reasonable period thereafter for our business records.',
        'Project drawings, approvals, agreements and accounting records are retained for longer periods, as required for professional records, statutory compliance and any applicable limitation period.',
      ],
    },
    {
      title: 'Data Security',
      body: [
        'We follow reasonable security practices and procedures to protect the information in our possession against unauthorised access, alteration, disclosure or destruction, in line with the standards expected under the Information Technology Act, 2000 and the rules made thereunder.',
        'Access to client information within our firm is limited to personnel who require it for the project.',
        'No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      title: 'Cookies',
      body: [
        'This website uses only the cookies necessary for the site to function correctly, including for the secure operation of our administrative area. We do not use cookies to build advertising profiles.',
        'You can configure your browser to refuse cookies, though some parts of the site may not work as intended if you do.',
      ],
    },
    {
      title: 'Third-Party Links and Services',
      body: [
        'This website integrates or links to third-party services such as Google Maps and WhatsApp. This policy does not govern those services, and we encourage you to review their respective privacy policies.',
      ],
    },
    {
      title: 'Your Rights',
      body: [
        'You may request access to the personal information we hold about you, ask us to correct or update anything inaccurate or incomplete, or request erasure of information that is no longer required for the purpose it was collected.',
        'You may also nominate another individual to exercise these rights on your behalf in the event of your death or incapacity.',
        'To exercise any of these rights, please contact us using the details below. We may need to verify your identity before acting on a request.',
      ],
    },
    {
      title: 'Grievance Redressal',
      body: [
        'If you have any grievance regarding the handling of your personal information, you may write to us at the email address given below with the subject line "Privacy Grievance".',
        'We will acknowledge your grievance and endeavour to resolve it within the timelines prescribed under applicable law.',
      ],
    },
    {
      title: 'Changes to This Policy',
      body: [
        'We may update this Privacy Policy from time to time to reflect changes in our practices or in applicable law. The current version will always be published on this page with the date last updated.',
      ],
    },
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
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy <span className="text-primary-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                How Devansh Constro &amp; Architect collects, uses and protects the information you
                share with us through this website.
              </p>
              <p className="text-sm text-gray-500 mt-6">Last updated: 2026</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <div className="space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-primary-50 rounded-xl border border-primary-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how your information is
                handled, please get in touch:
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-200 break-all"
                >
                  <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>{contact.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="flex flex-wrap gap-x-2">
                    {parsePhones(contact.phone).map((n) => (
                      <a key={n} href={telHref(n)} className="hover:text-primary-600 transition-colors duration-200">
                        {n}
                      </a>
                    ))}
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{contact.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
