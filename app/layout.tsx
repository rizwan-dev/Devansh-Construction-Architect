import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo'

const TITLE = 'Architects & Construction Company in Pune | Devansh Constro & Architect'
const DESCRIPTION =
  'Devansh Constro & Architect is an architecture and construction firm in Lohegaon, Pune. Architectural design, 3D visualisation, PMC/PCMC/PMRDA sanction drawings, Vastu consultation, civil construction and turnkey lock & key projects.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Sub-pages set their own title; this keeps the brand suffix consistent.
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'architects in Pune',
    'construction company in Pune',
    'architectural design Pune',
    'civil construction Pune',
    'PMC sanction drawing',
    'PCMC PMRDA sanctioning',
    'Vastu consultation Pune',
    '3D design and visualisation',
    'lock and key projects',
    'residential construction Lohegaon',
    'commercial construction Pune',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/lOGO_page-0001.jpg',
    shortcut: '/lOGO_page-0001.jpg',
    apple: '/lOGO_page-0001.jpg',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — architecture and construction in Pune`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  category: 'Construction & Architecture',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lOGO_page-0001.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/lOGO_page-0001.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/lOGO_page-0001.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["GeneralContractor", "LocalBusiness"],
              "@id": `${SITE_URL}/#organization`,
              "name": SITE_NAME,
              "url": SITE_URL,
              "logo": `${SITE_URL}/lOGO_page-0001.jpg`,
              "image": `${SITE_URL}${OG_IMAGE}`,
              "description":
                "Architecture and construction firm in Pune offering architectural design, 3D visualisation, sanction drawings, Vastu consultation, civil construction and turnkey projects.",
              "telephone": "+917249400319",
              "email": "devanshconstro@gmail.com",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No.09, C-Wing, Yogin Belva, Santnagar, Lohegaon",
                "addressLocality": "Pune",
                "postalCode": "411047",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.59681405132737,
                "longitude": 73.930597071165
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "16:00"
                }
              ],
              "areaServed": [
                { "@type": "City", "name": "Pune" },
                { "@type": "AdministrativeArea", "name": "Pimpri-Chinchwad" },
                { "@type": "AdministrativeArea", "name": "Maharashtra" }
              ],
              "knowsAbout": [
                "Architectural design",
                "Vastu consultation",
                "PMC PCMC PMRDA sanction drawings",
                "Civil construction",
                "MEP work",
                "Interior and landscaping"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction and Architectural Services",
                "itemListElement": [
                  "Architectural Design & 3D Visualisation",
                  "PMC / PCMC / PMRDA Sanction Drawings",
                  "Vastu Consultation",
                  "Civil Construction",
                  "MEP Work",
                  "Turnkey (Lock & Key) Projects",
                  "Project Management"
                ].map((name) => ({
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", "name": name }
                }))
              }
            })
          }}
        />
      </head>
        <body className="min-h-screen bg-white">
          {children}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Fix for Framer Motion elements not showing
                setTimeout(() => {
                  const hiddenElements = document.querySelectorAll('[style*="opacity:0"]');
                  hiddenElements.forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                  });
                }, 100);
              `,
            }}
          />
        </body>
    </html>
  )
}
