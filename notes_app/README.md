## Notes App

URL: https://66dadb452b43ebfaa8084677--shimmering-malasada-04a43c.netlify.app/

The Notes App allows users to create, delete, and update notes, with the most recently modified note automatically moving to the top of the list. It uses Firebase Firestore to store the notes in the cloud, enabling real-time syncing across devices. This ensures that users can access and modify their notes instantly, with changes reflected in real-time.

---

**Local Development Setup**

_For local development, a .env file needs to be created based on the .env.sample file._

---

### Authentication (Updated: July 31)

Users must sign up or log in to access the app.

**Supported methods:**

- Email & Password authentication
- Google Sign-In via Firebase

**Features:**
- Authentication state is persisted across sessions using Firebase Auth
- Conditional rendering is used to display:
  - `Login` / `Signup` screens when unauthenticated
  - Full Notes UI when authenticated
