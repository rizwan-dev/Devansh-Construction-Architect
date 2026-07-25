'use client'

import { useState, useEffect } from 'react'
import type { ContactInfo } from '@/lib/db'

// Defaults mirror the seed values so the UI has sensible content during the
// first render / if the API is briefly unavailable.
const FALLBACK: ContactInfo = {
  phone: '7249400319',
  whatsapp: '917249400319',
  email: 'Devanshconstro@gmail.com',
  address: 'Office No.09,C-Wing,Yogin Belva,Santnagar,Lohegaon,Pune-411047',
  addressShort: 'Lohegaon, Pune-411047',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278876!2d73.930597071165!3d18.59681405132737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDevansh%20Constro%20%26%20Architect!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin',
  workingHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
}

export function useContactInfo(): ContactInfo {
  const [contact, setContact] = useState<ContactInfo>(FALLBACK)

  useEffect(() => {
    let active = true
    fetch('/api/contact-info', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => {
        if (active && d?.contact) setContact(d.contact)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  return contact
}
