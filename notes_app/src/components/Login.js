import React, { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import "./login.css"

export default function Login({ onLogin, setShowSignup }) {
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
        <div className="login-wrapper">
            <div className="login-box">
                <h2 className="login-title">Login</h2>

                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>

                <button onClick={handleGoogleLogin} className="login-google-button">
                    Login with Google
                </button>

                <div className="login-signup-link">
                    Don’t have an account?{" "}
                    <span className="login-signup-text" onClick={() => setShowSignup(true)}>
                        Sign up
                    </span>
                </div>
            </div>
        </div>
    )
}
