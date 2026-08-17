'use client'

import { Phone } from 'lucide-react'
import { parsePhones, telHref } from '@/lib/phone'

interface CallButtonsProps {
  /** Raw phone field from the CMS, e.g. "7249400319/7776907669". */
  phone: string
  /** Label used when there is a single number. */
  label?: string
  className?: string
  /** Wrapper layout. */
  stack?: boolean
  /** Show the number itself even when there is only one. */
  alwaysShowNumber?: boolean
}

/**
 * Renders one dialable button per configured number.
 *
 * With a single number this behaves like the old single "Call Now" button.
 * With several, each gets its own button showing the number, so tapping
 * actually dials that specific line.
 */
export default function CallButtons({
  phone,
  label = 'Call Now',
  className = '',
  stack = false,
  alwaysShowNumber = false,
}: CallButtonsProps) {
  const numbers = parsePhones(phone)
  if (numbers.length === 0) return null

  const multiple = numbers.length > 1

  return (
    <div
      className={`flex ${stack || multiple ? 'flex-col sm:flex-row' : ''} flex-wrap gap-3 ${
        stack ? 'sm:flex-col' : ''
      }`}
    >
      {numbers.map((number) => (
        <a
          key={number}
          href={telHref(number)}
          aria-label={`Call ${number}`}
          className={
            className ||
            'inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200'
          }
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{multiple || alwaysShowNumber ? number : label}</span>
        </a>
      ))}
    </div>
  )
}
