# Admin Panel Setup

## Admin Access

The admin panel is accessible at: `/admin/login`

### Default Credentials
- **Username:** `admin`
- **Password:** `devansh123`

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=devansh123
ADMIN_SECRET=any-long-random-string   # signs the admin session token
```

### Vercel storage (production)
When deployed on Vercel, connect a **KV (Upstash Redis)** store and a **Blob** store to the project. Vercel injects these automatically — you do **not** set them by hand:

```bash
KV_REST_API_URL=...        # from the connected KV store
KV_REST_API_TOKEN=...      # from the connected KV store
BLOB_READ_WRITE_TOKEN=...  # from the connected Blob store
```

If `KV_REST_API_URL`/`KV_REST_API_TOKEN` are absent (e.g. local dev), the app persists to local JSON files under `data/` instead. If `BLOB_READ_WRITE_TOKEN` is absent, uploads are written to `public/uploads/`.

## Features

The dashboard has three tabs: **Submissions**, **Projects**, and **Contact Info**.

### Contact Form Submissions
- View all contact form submissions
- Filter by status (new, read, replied)
- Mark submissions as read or replied
- Delete submissions
- View submission details (contact info, message, timestamp, status)
- Real-time statistics, auto-refresh every 30 seconds

### Projects (add / edit / delete)
- Add a new project with title, description, category, location, year, size and features
- Upload a project image (JPG/PNG/WEBP, max 8 MB) or paste an image URL / path
- Edit or delete existing projects
- Changes are shown immediately on the public **/projects** page

### Contact Info (update)
- Update phone, WhatsApp, email, full address, short address, Google Maps embed URL
- Manage working-hours rows
- Changes are shown immediately across the website (home contact bar, footer, contact page)

## Security Notes

- Change default credentials in production
- Use environment variables for sensitive data
- Implement proper session management
- Add rate limiting for API endpoints
- Use HTTPS in production

## File Structure

```
app/
├── admin/
│   ├── login/page.tsx          # Admin login page
│   └── dashboard/page.tsx      # Admin dashboard
├── api/
│   ├── admin/
│   │   ├── login/route.ts      # Admin authentication
│   │   └── submissions/route.ts # Submission management
│   └── contact/route.ts        # Contact form API
lib/
└── contactStore.ts             # In-memory data store
```

## Data Storage

All admin-managed data (projects, contact info, contact-form submissions) is
persisted through a single storage abstraction (`lib/store.ts`):

- **Production (Vercel):** **Vercel KV** for JSON documents (`projects`, `contact`, `submissions`) and **Vercel Blob** for uploaded images. Used automatically when the KV/Blob env vars are present.
- **Local development:** JSON files under `data/` and images under `public/uploads/` (both git-ignored). No external services required.

Data is **seeded automatically** with the current website content (7 default projects + contact info) the first time each key is read on an empty store. You can also seed/reset explicitly via the admin seed endpoint (see below).

### Seeding
- `POST /api/admin/seed` — fills any empty keys with the default content (idempotent).
- `POST /api/admin/seed?force=1` — overwrites `projects` and `contact` with the defaults.

Both require an authenticated admin session.

## API Endpoints

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| GET | `/api/projects` | public | List projects (website) |
| POST/PUT/DELETE | `/api/projects` | admin | Create / edit / delete a project |
| GET | `/api/contact-info` | public | Get contact info (website) |
| PUT | `/api/contact-info` | admin | Update contact info |
| POST | `/api/admin/upload` | admin | Upload a project image (Blob/local) |
| POST | `/api/admin/seed` | admin | Seed/reset default content |
