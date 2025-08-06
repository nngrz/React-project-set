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

## Local Development

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

Continous Deployment is set up on every push to branch "backend". The express app located in `notes_app/backend/` is pushed to Railway.


## Updates

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
