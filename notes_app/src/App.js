import React from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NotesLayout from "./NotesLayout"

export default function App() {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [showSignup, setShowSignup] = React.useState(false)

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    // 🔧 Ping backend just for debugging
    React.useEffect(() => {
        fetch("http://localhost:3001/ping")
            .then(res => res.text())
            .then(data => console.log("Ping from backend:", data))
            .catch(err => console.error("Backend not reachable", err))
    }, [])

    if (loading) return <h2>Loading...</h2>

    if (!user) {
        return (
            <div className="auth-container">
                {showSignup ? (
                    <Signup onSignup={setUser} setShowSignup={setShowSignup} />
                ) : (
                    <Login onLogin={setUser} setShowSignup={setShowSignup} />
                )}
            </div>
        )
    }

    return <NotesLayout user={user} />
}
