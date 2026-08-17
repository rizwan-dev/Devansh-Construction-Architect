'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useContactInfo } from '@/lib/useContactInfo'
import { parsePhones, telHref } from '@/lib/phone'
import { FileText, Mail, Phone, MapPin } from 'lucide-react'

export default function TermsOfServicePage() {
  const contact = useContactInfo()

  const sections = [
    {
      title: 'Acceptance of Terms',
      body: [
        'By accessing or using this website, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use this website.',
        'These terms govern your use of this website only. Work undertaken by us for a client is governed by a separate written project agreement.',
      ],
    },
    {
      title: 'About Our Services',
      body: [
        'Devansh Constro & Architect provides architectural design and construction services, including 3D design and visualisation, Vastu consultation, sanction and working drawings, civil construction, MEP work, interior and landscaping work, renovation and turnkey (lock and key) projects.',
        'Information on this website is general in nature. It does not constitute a professional opinion on your specific site, a structural recommendation, a quotation, or a binding offer to provide services.',
      ],
    },
    {
      title: 'Enquiries, Estimates and Quotations',
      body: [
        'Submitting an enquiry through this website does not create a contract between you and Devansh Constro & Architect.',
        'Any budget figure, rate per square foot, timeline or scope discussed at the enquiry stage is indicative only. Firm pricing is provided in a written quotation following a site visit and confirmation of scope, specifications and drawings.',
        'Unless stated otherwise, quotations remain valid for the period mentioned in the quotation and are subject to revision thereafter due to changes in material rates, labour costs, statutory levies or scope.',
      ],
    },
    {
      title: 'Project Agreement Prevails',
      body: [
        'Work commences only under a written agreement or work order signed by both parties, setting out the scope of work, specifications, drawings, cost, payment schedule, timeline and any project-specific terms.',
        'In the event of any inconsistency between this website and your signed project agreement, the project agreement shall prevail.',
      ],
    },
    {
      title: 'Client Responsibilities',
      body: [
        'The client is responsible for having clear and marketable title to the property, and for providing accurate title documents, property card, 7/12 extract, existing drawings and any other documents required for design or approval.',
        'The client shall provide safe and timely access to the site, arrange for water and electricity connections for construction where agreed, and provide timely decisions, approvals and payments as per the agreed schedule.',
        'Delays in client decisions, approvals, material selections or payments may affect the project timeline and cost.',
      ],
    },
    {
      title: 'Statutory Approvals and Sanctions',
      body: [
        'Where agreed, we prepare and submit drawings to the concerned municipal corporation, planning authority or other statutory body on the client’s behalf.',
        'The grant, refusal, timing and conditions of any sanction, permission, NOC or completion certificate rest solely with the concerned authority. We do not guarantee the outcome or the time taken for any approval.',
        'Government fees, development charges, premiums, deposits and statutory levies are payable by the client and are not included in our professional fees unless expressly stated.',
      ],
    },
    {
      title: 'Design, Drawings and Intellectual Property',
      body: [
        'Copyright in all designs, drawings, 3D views, renders and specifications prepared by us remains with Devansh Constro & Architect.',
        'On full payment of the amounts due, the client receives a licence to use the drawings for constructing the specific project for which they were prepared.',
        'Drawings may not be reused for another site or project, reproduced, or shared with third parties for execution, without our prior written consent.',
      ],
    },
    {
      title: 'Project Timelines and Force Majeure',
      body: [
        'Timelines given are estimates based on normal working conditions and assume timely approvals, decisions and payments.',
        'We shall not be liable for delay or non-performance caused by events beyond our reasonable control, including monsoon or adverse weather, shortage or non-availability of materials or labour, transport disruption, strikes or bandhs, delays by statutory authorities, restrictions or bans on construction activity, changes in law, fire, flood, epidemic or other acts of God.',
        'In such events, the project period shall be extended by a reasonable equivalent duration.',
      ],
    },
    {
      title: 'Variations and Additional Work',
      body: [
        'Any change to the approved scope, drawings, specifications or materials requested by the client shall be treated as a variation.',
        'Variations may affect the project cost and timeline and will be charged in addition to the agreed contract value, as per rates mutually agreed in writing before the work is carried out.',
      ],
    },
    {
      title: 'Payments and Taxes',
      body: [
        'Payments are due as per the milestones set out in the project agreement. Work may be suspended if payments fall due and remain unpaid.',
        'All amounts are exclusive of Goods and Services Tax (GST) and other applicable statutory taxes and levies, which shall be charged additionally at the prevailing rates.',
      ],
    },
    {
      title: 'Materials, Workmanship and Defect Liability',
      body: [
        'Materials are supplied as per the agreed specifications. Natural materials such as stone, marble, granite and timber vary in grain, shade and texture; minor variation from samples, brochures or 3D renders is inherent and is not a defect.',
        'Any defect liability period, and its scope and exclusions, shall be as expressly stated in your project agreement.',
        'Defect liability does not cover normal wear and tear, damage caused by misuse, neglect, unauthorised alteration or work carried out by others, or issues arising from client-supplied materials.',
      ],
    },
    {
      title: 'Project Portfolio and Illustrations',
      body: [
        'Projects, images, areas and specifications shown on this website are examples of our previous and ongoing work, presented for illustration only.',
        '3D views and renders are artistic impressions. Actual construction may differ due to site conditions, statutory requirements, material availability and client choices.',
      ],
    },
    {
      title: 'Website Content and Acceptable Use',
      body: [
        'All content on this website, including text, images, designs and logos, is the property of Devansh Constro & Architect unless otherwise stated, and may not be reproduced or used commercially without our prior written permission.',
        'You agree not to use this website for any unlawful purpose, to submit false or misleading information, or to attempt to gain unauthorised access to any part of the site, its administrative area or its systems.',
      ],
    },
    {
      title: 'Third-Party Services',
      body: [
        'This website integrates third-party services such as Google Maps and WhatsApp. We are not responsible for the availability, content or practices of those services.',
      ],
    },
    {
      title: 'Limitation of Liability',
      body: [
        'While we take care to keep the information on this website accurate and current, we make no warranty as to its completeness or accuracy, and we do not guarantee uninterrupted availability of the website.',
        'To the extent permitted by law, we shall not be liable for any indirect or consequential loss arising from use of, or reliance on, this website.',
        'Our liability in respect of project work is limited to the extent set out in the applicable project agreement.',
      ],
    },
    {
      title: 'Dispute Resolution and Governing Law',
      body: [
        'These terms are governed by and construed in accordance with the laws of India.',
        'The parties shall first attempt to resolve any dispute amicably through discussion. Failing that, the dispute shall be referred to arbitration by a sole arbitrator under the Arbitration and Conciliation Act, 1996, with the seat of arbitration at Pune, Maharashtra, and proceedings conducted in English.',
        'Subject to the above, the courts at Pune, Maharashtra shall have exclusive jurisdiction.',
      ],
    },
    {
      title: 'Changes to These Terms',
      body: [
        'We may update these Terms of Service from time to time. The current version will always be published on this page with the date last updated.',
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
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of <span className="text-primary-600">Service</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The terms that apply when you use the Devansh Constro &amp; Architect website and
                enquire about our services.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If anything here is unclear, or you would like to discuss a project agreement, please
                contact us:
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
