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

# Next.js Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

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

- **Contact form submissions** use an in-memory store (`lib/contactStore.ts`) and reset on server restart.
- **Projects and contact info** are persisted to JSON files under `data/` (`data/projects.json`, `data/contact.json`) via `lib/db.ts`, so admin edits survive restarts. These files are created automatically from seed defaults on first read and are git-ignored.
- **Uploaded images** are saved to `public/uploads/` (git-ignored) and referenced by public path.

### Production note
File-based storage works for local/self-hosted (Node) deployments. On serverless hosts with a read-only/ephemeral filesystem (e.g. Vercel), replace the read/write helpers in `lib/db.ts` and the upload route with a real database + object storage (e.g. S3).

## API Endpoints

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| GET | `/api/projects` | public | List projects (website) |
| POST/PUT/DELETE | `/api/projects` | admin | Create / edit / delete a project |
| GET | `/api/contact-info` | public | Get contact info (website) |
| PUT | `/api/contact-info` | admin | Update contact info |
| POST | `/api/admin/upload` | admin | Upload a project image |
