import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import "./login.css"

export default function Signup({ onSignup, setShowSignup }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignup(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                onSignup(userCredential.user)
            })
            .catch((error) => {
                alert("Signup failed: " + error.message)
            })
    }

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <h2 className="login-title">Sign Up</h2>

                <form onSubmit={handleSignup} className="login-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">
                        Sign Up
                    </button>
                </form>

                <div className="login-signup-link">
                    Already have an account?{" "}
                    <span className="login-signup-text" onClick={() => setShowSignup(false)}>
                        Log in
                    </span>
                </div>
            </div>
        </div>
    )
}
