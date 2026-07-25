// File-based JSON persistence for projects and contact info.
// This is SERVER-ONLY (uses the Node fs module). Do not import from client components.
//
// Data is stored under <project-root>/data/*.json so that edits made in the admin
// portal survive server restarts. If a file does not exist yet, it is seeded from
// the DEFAULT_* values below (which mirror the original hard-coded content).
//
// NOTE: On serverless hosts (e.g. Vercel) the filesystem is read-only/ephemeral.
// For production, swap the read/write helpers here for a real database.

import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json')
const CONTACT_FILE = path.join(DATA_DIR, 'contact.json')

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
  phone: string // used for tel: links, e.g. "7249400319"
  whatsapp: string // digits only incl. country code for wa.me, e.g. "917249400319"
  email: string
  address: string // full postal address
  addressShort: string // short display, e.g. "Lohegaon, Pune-411047"
  mapEmbedUrl: string
  workingHours: WorkingHour[]
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'galaxy-tower-dhanori',
    title: 'Galaxy Tower - Dhanori',
    description:
      'Modern luxury residential tower with contemporary design, premium finishes, and smart home features in the heart of Dhanori.',
    image: '/dhanori.jpeg',
    category: 'Residential',
    location: 'Dhanori, Pune',
    year: '2024',
    size: '2,50,000 sq ft',
    features: ['2 & 3 BHK', 'Modern Design', 'Premium Location', 'Smart Features'],
  },
  {
    id: 'awhalwadi-residency',
    title: 'Awhalwadi Residency',
    description:
      'Premium residential complex with modern amenities, landscaped gardens, and excellent connectivity in Awhalwadi.',
    image: '/awhalwadi.jpeg',
    category: 'Residential',
    location: 'Awhalwadi, Pune',
    year: '2023',
    size: '1,80,000 sq ft',
    features: ['2 & 3 BHK', 'Landscaped Gardens', 'Modern Amenities', 'Excellent Connectivity'],
  },
  {
    id: 'kharadi-business-hub',
    title: 'Kharadi Business Hub',
    description:
      'State-of-the-art commercial complex designed for modern businesses with flexible workspaces and premium amenities.',
    image: '/Kharadi.jpeg',
    category: 'Commercial',
    location: 'Kharadi, Pune',
    year: '2023',
    size: '3,20,000 sq ft',
    features: ['Flexible Workspaces', 'Modern Amenities', 'Premium Location', 'Business Hub'],
  },
  {
    id: 'junnar-heights',
    title: 'Junnar Heights',
    description:
      'Luxurious residential development offering premium living spaces with modern design and scenic views.',
    image: '/Junnar.jpeg',
    category: 'Residential',
    location: 'Junnar, Pune',
    year: '2022',
    size: '1,50,000 sq ft',
    features: ['Premium Living', 'Scenic Views', 'Modern Design', 'Luxury Amenities'],
  },
  {
    id: 'lohegaon-row-houses',
    title: 'Lohegaon Row Houses',
    description:
      'Exclusive row house development with contemporary architecture, private gardens, and premium finishes.',
    image: '/Lohegaon Row House.jpeg',
    category: 'Residential',
    location: 'Lohegaon, Pune',
    year: '2022',
    size: '2,00,000 sq ft',
    features: ['Row Houses', 'Private Gardens', 'Contemporary Design', 'Premium Finishes'],
  },
  {
    id: 'manjiri-gardens',
    title: 'Manjiri Gardens',
    description:
      'Beautiful residential project with landscaped gardens, modern amenities, and family-friendly environment.',
    image: '/Manjiri.jpeg',
    category: 'Residential',
    location: 'Manjiri, Pune',
    year: '2023',
    size: '1,40,000 sq ft',
    features: ['Landscaped Gardens', 'Family Friendly', 'Modern Amenities', 'Beautiful Design'],
  },
  {
    id: 'satara-plaza',
    title: 'Satara Plaza',
    description:
      'Modern commercial plaza offering retail and office spaces with contemporary design and excellent connectivity.',
    image: '/Satara.jpeg',
    category: 'Commercial',
    location: 'Satara, Maharashtra',
    year: '2022',
    size: '2,80,000 sq ft',
    features: ['Retail Spaces', 'Office Complex', 'Modern Design', 'Excellent Connectivity'],
  },
]

const DEFAULT_CONTACT: ContactInfo = {
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

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

function readJson<T>(file: string, fallback: T): T {
  try {
    ensureDataDir()
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify(fallback, null, 2), 'utf-8')
      return fallback
    }
    const raw = fs.readFileSync(file, 'utf-8')
    return JSON.parse(raw) as T
  } catch (error) {
    console.error(`Failed to read ${file}:`, error)
    return fallback
  }
}

function writeJson<T>(file: string, data: T): void {
  ensureDataDir()
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8')
}

function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'project'
  )
}

/* ----------------------------- Projects ----------------------------- */

export function getAllProjects(): Project[] {
  return readJson<Project[]>(PROJECTS_FILE, DEFAULT_PROJECTS)
}

export function getProjectById(id: string): Project | null {
  return getAllProjects().find((p) => p.id === id) || null
}

export function addProject(data: Omit<Project, 'id'>): Project {
  const projects = getAllProjects()
  let id = slugify(data.title)
  // Ensure unique id
  let suffix = 1
  const existingIds = new Set(projects.map((p) => p.id))
  while (existingIds.has(id)) {
    id = `${slugify(data.title)}-${++suffix}`
  }
  const project: Project = { id, ...data }
  projects.unshift(project)
  writeJson(PROJECTS_FILE, projects)
  return project
}

export function updateProject(id: string, data: Partial<Omit<Project, 'id'>>): Project | null {
  const projects = getAllProjects()
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return null
  projects[index] = { ...projects[index], ...data, id }
  writeJson(PROJECTS_FILE, projects)
  return projects[index]
}

export function deleteProject(id: string): boolean {
  const projects = getAllProjects()
  const next = projects.filter((p) => p.id !== id)
  if (next.length === projects.length) return false
  writeJson(PROJECTS_FILE, next)
  return true
}

/* --------------------------- Contact info --------------------------- */

export function getContactInfo(): ContactInfo {
  return readJson<ContactInfo>(CONTACT_FILE, DEFAULT_CONTACT)
}

export function updateContactInfo(data: Partial<ContactInfo>): ContactInfo {
  const current = getContactInfo()
  const next: ContactInfo = { ...current, ...data }
  writeJson(CONTACT_FILE, next)
  return next
}
