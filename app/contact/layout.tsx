import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Free Consultation in Pune',
  description:
    'Contact Devansh Constro & Architect in Lohegaon, Pune for a free consultation on your architectural design or construction project. Call, WhatsApp, email or visit our office.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Devansh Constro & Architect',
    description:
      'Get in touch for a free consultation on your construction or architectural project in Pune.',
    url: '/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
