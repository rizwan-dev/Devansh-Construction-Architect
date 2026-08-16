// Data access for projects and contact info.
// Persisted via lib/store.ts — Vercel KV in production, local JSON files in dev.
// SERVER-ONLY. Do not import from client components (import types from lib/types).

import { readDoc, writeDoc } from './store'
import type { Project, ContactInfo } from './types'

export type { Project, ContactInfo, WorkingHour } from './types'

const PROJECTS_KEY = 'projects'
const CONTACT_KEY = 'contact'

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
  email: 'devanshconstro@gmail.com',
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

export async function getAllProjects(): Promise<Project[]> {
  return readDoc<Project[]>(PROJECTS_KEY, DEFAULT_PROJECTS)
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getAllProjects()
  return projects.find((p) => p.id === id) || null
}

export async function addProject(data: Omit<Project, 'id'>): Promise<Project> {
  const projects = await getAllProjects()
  const existingIds = new Set(projects.map((p) => p.id))
  let id = slugify(data.title)
  let suffix = 1
  while (existingIds.has(id)) {
    id = `${slugify(data.title)}-${++suffix}`
  }
  const project: Project = { id, ...data }
  projects.unshift(project)
  await writeDoc(PROJECTS_KEY, projects)
  return project
}

export async function updateProject(
  id: string,
  data: Partial<Omit<Project, 'id'>>
): Promise<Project | null> {
  const projects = await getAllProjects()
  const index = projects.findIndex((p) => p.id === id)
  if (index === -1) return null
  projects[index] = { ...projects[index], ...data, id }
  await writeDoc(PROJECTS_KEY, projects)
  return projects[index]
}

export async function deleteProject(id: string): Promise<boolean> {
  const projects = await getAllProjects()
  const next = projects.filter((p) => p.id !== id)
  if (next.length === projects.length) return false
  await writeDoc(PROJECTS_KEY, next)
  return true
}

/* --------------------------- Contact info --------------------------- */

export async function getContactInfo(): Promise<ContactInfo> {
  return readDoc<ContactInfo>(CONTACT_KEY, DEFAULT_CONTACT)
}

export async function updateContactInfo(data: Partial<ContactInfo>): Promise<ContactInfo> {
  const current = await getContactInfo()
  const next: ContactInfo = { ...current, ...data }
  await writeDoc(CONTACT_KEY, next)
  return next
}

/* ------------------------------- Seeding ------------------------------- */

// Seed the store with the current website content (the default projects and
// contact info). When `force` is false, this only fills in keys that are empty
// (reads auto-seed anyway). When `force` is true, it overwrites with defaults.
export async function seedDefaults(force = false): Promise<{ projects: number; contact: boolean }> {
  if (force) {
    await writeDoc(PROJECTS_KEY, DEFAULT_PROJECTS)
    await writeDoc(CONTACT_KEY, DEFAULT_CONTACT)
    return { projects: DEFAULT_PROJECTS.length, contact: true }
  }
  // Non-force: getAll* auto-seeds empty keys with the defaults.
  const projects = await getAllProjects()
  await getContactInfo()
  return { projects: projects.length, contact: true }
}
