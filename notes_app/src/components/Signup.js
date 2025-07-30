import React, { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

export default function Signup({ onSignup }) {
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
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Sign Up</button>
        </form>
    )
}
