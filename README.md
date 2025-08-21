# SureRide — Backend

Minimal Express + MongoDB API for the SureRide car-rental application.

This backend provides REST endpoints for users, cars and bookings, handles image uploads with Multer, and uses JWT for authentication.

## Quick overview
- Tech: Node.js (ES modules), Express, Mongoose, Multer, JSON Web Tokens
- Entry: `index.js` (listens on port 5000 by default)

## Requirements
- Node.js 18+ and npm
- A MongoDB instance (URI required)

## Required environment variables
Create a `.env` file in `backend/` with at least:

```
MONGO_DB_URI=your_mongo_connection_string
SECRET=your_jwt_secret
# optional: PORT=5000
```

## Install dependencies (PowerShell)

```powershell
cd "d:\!SLIIT UNI\Internship\Tasks\Car Rental Management sys\backend"
npm install
```

## Run (development)

Start the backend (uses nodemon):

```powershell
npm start
```

You should see logs for database connection and server startup. Server default URL: `http://localhost:5000`.

## API highlights
- Static uploads served at: `GET /uploads/<filename>`
- Main routes mounted in `index.js`:
	- `/api/cars` — cars CRUD + image upload
	- `/api/users` — user registration / auth
	- `/api/bookings` — booking creation and queries

Authentication
- Requests that require authentication expect an `Authorization` header with `Bearer <token>`.

## Project structure (important files)
- `index.js` — app bootstrap, DB connection, global middleware and route mounting
- `routes/` — route definitions
- `controllers/` — request handlers
- `models/` — Mongoose schemas
- `uploads/` — stored images (served statically)

## Notes & troubleshooting
- If database connection fails, check `MONGO_DB_URI` in `.env`.
- Ensure `uploads/` directory exists and Node process has write permissions.
- JWT middleware in `index.js` attaches `req.user` when a valid token is provided; invalid tokens currently do not block requests.

## Next steps (recommended)
- Add `backend/.env.example` (I can create this for you).
- Add a light health-check endpoint (e.g., `GET /health`) for smoke tests.

---