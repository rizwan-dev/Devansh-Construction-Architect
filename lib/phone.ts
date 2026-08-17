// The admin stores contact numbers in a single field. Multiple numbers are
// entered separated by "/" (e.g. "7249400319/7776907669").
//
// A raw `tel:7249400319/7776907669` link does not dial, so anywhere we render a
// call action we split the field first and emit one link per number.

/** Split a contact field into individual numbers. Accepts "/" or "," and ignores spacing. */
export function parsePhones(raw?: string | null): string[] {
  if (!raw) return []
  return raw
    .split(/[/,]/)
    .map((p) => p.trim())
    .filter(Boolean)
}

/** A dialable href. Strips spaces, dashes and brackets, keeps a leading "+". */
export function telHref(number: string): string {
  const cleaned = number.trim().replace(/(?!^\+)[^\d]/g, '')
  return `tel:${cleaned}`
}

/** The first number — for places that can only show one (e.g. schema markup). */
export function primaryPhone(raw?: string | null): string {
  return parsePhones(raw)[0] ?? ''
}
