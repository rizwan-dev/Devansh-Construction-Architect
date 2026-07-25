'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ContactSubmission } from '@/lib/contactStore'
import type { Project, ContactInfo } from '@/lib/db'

type Tab = 'submissions' | 'projects' | 'contact'

const emptyProject: Omit<Project, 'id'> = {
  title: '',
  description: '',
  image: '',
  category: 'Residential',
  location: '',
  year: '',
  size: '',
  features: [],
}

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('submissions')
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check authentication
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in')
    if (isLoggedIn !== 'true') {
      router.push('/admin/login')
      return
    }
    setIsLoading(false)
  }, [router])

  const handleUnauthorized = () => {
    localStorage.removeItem('admin_logged_in')
    router.push('/admin/login')
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
    } catch (error) {
      console.error('Error during logout:', error)
    } finally {
      localStorage.removeItem('admin_logged_in')
      router.push('/admin/login')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: 'submissions', label: 'Submissions' },
    { key: 'projects', label: 'Projects' },
    { key: 'contact', label: 'Contact Info' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
          {/* Tabs */}
          <div className="mt-4 flex space-x-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  tab === t.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {tab === 'submissions' && <SubmissionsTab onUnauthorized={handleUnauthorized} />}
        {tab === 'projects' && <ProjectsTab onUnauthorized={handleUnauthorized} />}
        {tab === 'contact' && <ContactTab onUnauthorized={handleUnauthorized} />}
      </div>
    </div>
  )
}

/* ============================ Submissions ============================ */

function SubmissionsTab({ onUnauthorized }: { onUnauthorized: () => void }) {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [stats, setStats] = useState({ total: 0, new: 0, read: 0, replied: 0 })
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all')

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions', { credentials: 'include' })
      const data = await response.json()
      if (response.ok) {
        setSubmissions(data.submissions)
        setStats(data.stats)
      } else if (response.status === 401) {
        onUnauthorized()
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    }
  }

  useEffect(() => {
    fetchSubmissions()
    const interval = setInterval(fetchSubmissions, 30000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUpdateStatus = async (id: string, status: 'read' | 'replied') => {
    const response = await fetch('/api/admin/submissions', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ id, status }),
    })
    if (response.ok) fetchSubmissions()
    else if (response.status === 401) onUnauthorized()
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return
    const response = await fetch('/api/admin/submissions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ id }),
    })
    if (response.ok) fetchSubmissions()
    else if (response.status === 401) onUnauthorized()
  }

  const filteredSubmissions = submissions.filter((s) =>
    filter === 'all' ? true : s.status === filter
  )

  const getStatusColor = (status: 'new' | 'read' | 'replied') => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'read':
        return 'bg-yellow-100 text-yellow-800'
      case 'replied':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const statCards = [
    { label: 'Total Submissions', value: stats.total, dot: 'bg-blue-600', bg: 'bg-blue-100' },
    { label: 'New Submissions', value: stats.new, dot: 'bg-blue-600', bg: 'bg-blue-100' },
    { label: 'Read Submissions', value: stats.read, dot: 'bg-yellow-600', bg: 'bg-yellow-100' },
    { label: 'Replied Submissions', value: stats.replied, dot: 'bg-green-600', bg: 'bg-green-100' },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statCards.map((c) => (
          <div key={c.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${c.bg} rounded-full flex items-center justify-center`}>
                <div className={`w-6 h-6 ${c.dot} rounded`}></div>
              </div>
              <div className="ml-4">
                <p className="text-gray-500 text-sm">{c.label}</p>
                <h2 className="text-2xl font-bold text-gray-900">{c.value}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Contact Submissions</h3>
            <div className="flex space-x-2">
              {(['all', 'new', 'read', 'replied'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                    filter === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {status} ({status === 'all' ? stats.total : stats[status]})
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No submissions found for this filter.</div>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <div key={submission.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            submission.status
                          )}`}
                        >
                          {submission.status}
                        </span>
                        <p className="text-sm text-gray-500">
                          {new Date(submission.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{submission.subject}</h4>
                      <p className="text-gray-700 text-sm mb-1">
                        From: {submission.name} ({submission.email})
                      </p>
                      <p className="text-gray-700 text-sm mb-2">Phone: {submission.phone}</p>
                      <p className="text-gray-600">{submission.message}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      {submission.status === 'new' && (
                        <button
                          onClick={() => handleUpdateStatus(submission.id, 'read')}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Mark as Read
                        </button>
                      )}
                      {submission.status === 'read' && (
                        <button
                          onClick={() => handleUpdateStatus(submission.id, 'replied')}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Mark as Replied
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ============================== Projects ============================== */

function ProjectsTab({ onUnauthorized }: { onUnauthorized: () => void }) {
  const [projects, setProjects] = useState<Project[]>([])
  const [editing, setEditing] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<Omit<Project, 'id'>>(emptyProject)
  const [featuresText, setFeaturesText] = useState('')
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const fetchProjects = async () => {
    const res = await fetch('/api/projects', { cache: 'no-store' })
    const data = await res.json()
    if (res.ok) setProjects(data.projects)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const openAdd = () => {
    setEditing(null)
    setForm(emptyProject)
    setFeaturesText('')
    setError('')
    setShowForm(true)
  }

  const openEdit = (p: Project) => {
    setEditing(p)
    const { id, ...rest } = p
    setForm(rest)
    setFeaturesText((p.features || []).join(', '))
    setError('')
    setShowForm(true)
  }

  const handleUpload = async (file: File) => {
    setUploading(true)
    setError('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        credentials: 'include',
        body: fd,
      })
      const data = await res.json()
      if (res.ok) {
        setForm((f) => ({ ...f, image: data.path }))
      } else if (res.status === 401) {
        onUnauthorized()
      } else {
        setError(data.error || 'Upload failed')
      }
    } catch (e) {
      setError('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setError('')
    const payload = {
      ...form,
      features: featuresText,
      ...(editing ? { id: editing.id } : {}),
    }
    try {
      const res = await fetch('/api/projects', {
        method: editing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) {
        setShowForm(false)
        fetchProjects()
      } else if (res.status === 401) {
        onUnauthorized()
      } else {
        setError(data.error || 'Save failed')
      }
    } catch (e) {
      setError('Save failed')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project? This will remove it from the website.')) return
    const res = await fetch('/api/projects', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ id }),
    })
    if (res.ok) fetchProjects()
    else if (res.status === 401) onUnauthorized()
  }

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Projects <span className="text-gray-400">({projects.length})</span>
        </h3>
        <button
          onClick={openAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          + Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-40 bg-gray-100">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  No image
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
                  {p.category}
                </span>
                {p.year && <span className="text-xs text-gray-500">{p.year}</span>}
              </div>
              <h4 className="font-semibold text-gray-900">{p.title}</h4>
              <p className="text-sm text-gray-500 mb-3">{p.location}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(p)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {editing ? 'Edit Project' : 'Add Project'}
              </h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input
                  className={inputClass}
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  className={inputClass}
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select
                    className={inputClass}
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    className={inputClass}
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input
                    className={inputClass}
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                  <input
                    className={inputClass}
                    placeholder="e.g. 2,50,000 sq ft"
                    value={form.size}
                    onChange={(e) => setForm({ ...form, size: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Features (comma separated)
                </label>
                <input
                  className={inputClass}
                  placeholder="2 & 3 BHK, Modern Design, Premium Location"
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <div className="flex items-center gap-3">
                  <input
                    className={inputClass}
                    placeholder="/uploads/... or https://..."
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                  />
                  <label className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm cursor-pointer">
                    {uploading ? 'Uploading…' : 'Upload'}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0]
                        if (f) handleUpload(f)
                      }}
                    />
                  </label>
                </div>
                {form.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form.image}
                    alt="preview"
                    className="mt-3 h-32 w-full object-cover rounded-lg border"
                  />
                )}
              </div>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white"
              >
                {saving ? 'Saving…' : editing ? 'Update Project' : 'Create Project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ============================= Contact Info ============================= */

function ContactTab({ onUnauthorized }: { onUnauthorized: () => void }) {
  const [form, setForm] = useState<ContactInfo | null>(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/contact-info', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setForm(d.contact))
      .catch(() => setError('Failed to load contact info'))
  }, [])

  const handleSave = async () => {
    if (!form) return
    setSaving(true)
    setMessage('')
    setError('')
    try {
      const res = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setForm(data.contact)
        setMessage('Contact information updated. The website now shows these details.')
      } else if (res.status === 401) {
        onUnauthorized()
      } else {
        setError(data.error || 'Save failed')
      }
    } catch (e) {
      setError('Save failed')
    } finally {
      setSaving(false)
    }
  }

  if (!form) {
    return <div className="text-gray-500">Loading contact info…</div>
  }

  const inputClass =
    'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'

  const setField = (field: keyof ContactInfo, value: string) =>
    setForm({ ...form, [field]: value })

  const setHour = (i: number, key: 'day' | 'hours', value: string) => {
    const workingHours = form.workingHours.map((w, idx) =>
      idx === i ? { ...w, [key]: value } : w
    )
    setForm({ ...form, workingHours })
  }

  const addHour = () =>
    setForm({ ...form, workingHours: [...form.workingHours, { day: '', hours: '' }] })

  const removeHour = (i: number) =>
    setForm({ ...form, workingHours: form.workingHours.filter((_, idx) => idx !== i) })

  return (
    <div className="max-w-3xl bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>

      {message && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm mb-4">
          {message}
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone (tel)</label>
          <input className={inputClass} value={form.phone} onChange={(e) => setField('phone', e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp (digits incl. country code)
          </label>
          <input
            className={inputClass}
            value={form.whatsapp}
            onChange={(e) => setField('whatsapp', e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input className={inputClass} value={form.email} onChange={(e) => setField('email', e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
          <input
            className={inputClass}
            value={form.address}
            onChange={(e) => setField('address', e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Address (footer/home bar)
          </label>
          <input
            className={inputClass}
            value={form.addressShort}
            onChange={(e) => setField('addressShort', e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Google Maps Embed URL</label>
          <input
            className={inputClass}
            value={form.mapEmbedUrl}
            onChange={(e) => setField('mapEmbedUrl', e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">Working Hours</label>
          <button onClick={addHour} className="text-sm text-blue-600 hover:text-blue-700">
            + Add row
          </button>
        </div>
        <div className="space-y-2">
          {form.workingHours.map((w, i) => (
            <div key={i} className="flex gap-2">
              <input
                className={inputClass}
                placeholder="Day (e.g. Monday - Friday)"
                value={w.day}
                onChange={(e) => setHour(i, 'day', e.target.value)}
              />
              <input
                className={inputClass}
                placeholder="Hours (e.g. 9:00 AM - 6:00 PM)"
                value={w.hours}
                onChange={(e) => setHour(i, 'hours', e.target.value)}
              />
              <button
                onClick={() => removeHour(i)}
                className="px-3 rounded-lg bg-red-100 text-red-600 hover:bg-red-200"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white"
        >
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
