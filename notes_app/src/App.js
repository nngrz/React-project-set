import React from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"
import Login from "./components/Login"
import Signup from "./components/Signup"
import MainApp from "./MainApp"

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

    if (loading) return <h2>Loading...</h2>

    if (!user) {
        return (
            <div className="auth-container">
                {showSignup ? (
                    <>
                        <Signup onSignup={setUser} />
                        <p>
                            Already have an account?{" "}
                            <button onClick={() => setShowSignup(false)}>Log in</button>
                        </p>
                    </>
                ) : (
                    <Login onLogin={setUser} setShowSignup={setShowSignup} />
                )}
            </div>
        )
    }

    return <MainApp user={user} />
}