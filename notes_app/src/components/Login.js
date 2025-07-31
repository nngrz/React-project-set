import React, { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                onLogin(userCredential.user)
            })
            .catch((error) => {
                alert("Login failed: " + error.message)
            })
    }

    function handleGoogleLogin() {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                onLogin(result.user)
            })
            .catch((error) => {
                alert("Google login failed: " + error.message)
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            <hr />

            <button onClick={handleGoogleLogin}>
                Login with Google
            </button>
        </div>
    )
}
