# Notes App

URL: shimmering-malasada-04a43c.netlify.app

The Notes App allows users to create, delete, and update notes, with the most recently modified note automatically moving to the top of the list. It uses Firebase Firestore to store the notes in the cloud, enabling real-time syncing across devices. This ensures that users can access and modify their notes instantly, with changes reflected in real-time.

## Features

**Authentication** (Email/Password + Google Sign-In)
-  **Rich-text note editing** with Markdown support
-  **Real-time sync** via Firebase Firestore
-  **Express backend** to receive note updates
-  Backend extensibility (logging, analytics, storage, etc.)

## Local Development Setup

**1. Clone the Repository**

```bash
git clone https://github.com/nngrz/notes-app.git
cd notes-app
```

**2. Install Dependencies**
```bash
npm install
```

**3. Create a .env file**
For local development, a .env file needs to be created based on the .env.sample file.

You’ll need Firebase credentials

## How to Run the Frontend

```bash
npm start
```

## How to Start the Backend Locally (Express + Node.js)

**1. Navigate to the backend folder**
``` bash
cd backend
```

**2. Install backend dependencies**
```bash
npm install
```

**3. Start the backend server**
```bash
npm run dev
```

## Deployment

### Frontend (Netlify)

**1. In terminal, run:**
```bash
npm run build
```

**2.Go to [Netlify]**

**3. Drag and drop the build/ folder into the window to deploy.**

### Backend (Railway)
**1. Push notes_app/backend/ to GitHub.**

**2. Go to https://railway.app → “New Project” → “Deploy from GitHub”.**

**3. Set the root directory as:** `notes_app/backend`

**4. In index.js, use:**
```bash
const PORT = process.env.PORT || 3001;
```
**5. Click Generate Domain, then update the frontend .env or Netlify settings with:**
```bash
REACT_APP_BACKEND_URL=https://your-backend.up.railway.app
```

## Updates

### Backend Deployment via Railway (Updated: August 6, 2025)

The custom Express backend was deployed to Railway, enabling the app to function in production without relying on a local server.

**Purpose:**

- To make the backend accessible from the live Netlify frontend
- To support backend features like logging and extensibility in a real environment

**What was added:**

- Updated backend/index.js to use process.env.PORT || 3001 for compatibility with Railway's dynamic ports
- Generated a public Railway service domain to receive API calls from the React frontend
- Set the backend URL in .env using REACT_APP_BACKEND_URL

**Features:**

- Backend is now live and reachable from deployed React frontend
- Route POST /logNote now functions in production
- The React app gracefully falls back to localhost during development

### Express Backend Integration (Updated: Augues 5, 2025)

A custom Node.js + Express backend was added to extend the app beyond Firebase.

**Purpose:**

- To receive and log note updates in real-time from the frontend
- To provide a foundation for custom backend features like analytics, backups, and admin tools

**What was added:**

- A new backend/ folder with an Express server
- Route POST /logNote to receive notes from the React app
- Integration of a fetch() call inside the note update function (NotesLayout.js)

**Features:**

- Backend runs independently
- React frontend sends each edited note to the backend automatically
- Firebase remains the source of truth for authentication and data
- Backend functionality is optional — app still works without it

### Authentication (Updated: July 3, 2025)

Users must sign up or log in to access the app.

**Supported methods:**

- Email & Password authentication
- Google Sign-In via Firebase

**Features:**

- Authentication state is persisted across sessions using Firebase Auth
- Conditional rendering is used to display:
  - `Login` / `Signup` screens when unauthenticated
  - Full Notes UI when authenticated
