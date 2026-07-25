// Storage abstraction: uses Vercel KV when configured (production on Vercel),
// otherwise falls back to local JSON files under ./data (local development).
//
// KV is used when KV_REST_API_URL + KV_REST_API_TOKEN are present — these are
// injected automatically when a KV / Upstash Redis store is connected to the
// Vercel project. Without them, edits are persisted to disk so `npm run dev`
// keeps working with no external services.

import fs from 'fs'
import path from 'path'

const kvEnabled = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN)

// Lazily import @vercel/kv only when KV is actually enabled.
let kvClient: any = null
async function getKv() {
  if (!kvClient) {
    const mod = await import('@vercel/kv')
    kvClient = mod.kv
  }
  return kvClient
}

const DATA_DIR = path.join(process.cwd(), 'data')
const filePath = (key: string) => path.join(DATA_DIR, `${key}.json`)

export function isKvEnabled(): boolean {
  return kvEnabled
}

// Read a JSON document by key. If it does not exist yet, seed it with `fallback`.
export async function readDoc<T>(key: string, fallback: T): Promise<T> {
  if (kvEnabled) {
    try {
      const kv = await getKv()
      const value = (await kv.get(key)) as T | null
      if (value === null || value === undefined) {
        await kv.set(key, fallback)
        return fallback
      }
      return value
    } catch (error) {
      console.error(`KV read failed for "${key}":`, error)
      return fallback
    }
  }

  // File fallback (local dev)
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
    const fp = filePath(key)
    if (!fs.existsSync(fp)) {
      fs.writeFileSync(fp, JSON.stringify(fallback, null, 2), 'utf-8')
      return fallback
    }
    return JSON.parse(fs.readFileSync(fp, 'utf-8')) as T
  } catch (error) {
    console.error(`File read failed for "${key}":`, error)
    return fallback
  }
}

// Write a JSON document by key.
export async function writeDoc<T>(key: string, value: T): Promise<void> {
  if (kvEnabled) {
    const kv = await getKv()
    await kv.set(key, value)
    return
  }
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(filePath(key), JSON.stringify(value, null, 2), 'utf-8')
}
