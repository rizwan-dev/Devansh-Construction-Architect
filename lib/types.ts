// Shared data types. Safe to import from both server and client code
// (contains types only — no Node/server dependencies).

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  location: string
  year: string
  size: string
  features: string[]
}

export interface WorkingHour {
  day: string
  hours: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: string
  addressShort: string
  mapEmbedUrl: string
  workingHours: WorkingHour[]
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  timestamp: string | Date
  status: 'new' | 'read' | 'replied'
}
