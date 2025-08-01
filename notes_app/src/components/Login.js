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
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "#0f0f1c"
        }}>
            <div style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "2rem",
                width: "90%",
                maxWidth: "400px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
            }}>
                <h2 style={{
                    textAlign: "left",
                    color: "#111",
                    marginBottom: "1rem"
                }}>Login</h2>

                <form onSubmit={handleLogin} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"}}>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{
                            padding: "0.75rem 1rem",
                            borderRadius: "2rem",
                            border: "none",
                            backgroundColor: "#eee",
                            fontSize: "1rem"
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{
                            padding: "0.75rem 1rem",
                            borderRadius: "2rem",
                            border: "none",
                            backgroundColor: "#eee",
                            fontSize: "1rem"
                        }}
                    />
                    <button type="submit" style={{
                        background: "linear-gradient(to right, #a855f7, #3b82f6)",
                        color: "white",
                        padding: "0.75rem 1rem",
                        border: "none",
                        borderRadius: "2rem",
                        fontSize: "1rem",
                        cursor: "pointer"
                    }}>
                        Login
                    </button>
                </form>

                <button onClick={handleGoogleLogin} style={{
                    marginTop: "1rem",
                    padding: "0.75rem 1rem",
                    width: "100%",
                    borderRadius: "2rem",
                    border: "1px solid #ccc",
                    background: "white",
                    cursor: "pointer",
                    fontSize: "1rem"
                }}>
                    Login with Google
                </button>

                <div style={{
                    marginTop: "1.5rem",
                    fontSize: "0.875rem",
                    textAlign: "center",
                    color: "#555"
                }}>
                    Don’t have an account? <span style={{ color: "#3b82f6", cursor: "pointer" }}>Sign up</span>
                </div>
            </div>
        </div>
    )
}
