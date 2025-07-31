import React from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export default function Signout({ onSignout }) {
    function handleSignout() {
        signOut(auth)
            .then(() => {
                onSignout()
            })
            .catch((error) => {
                alert("Sign out failed: " + error.message)
            })
    }

    return (
        <button
            onClick={handleSignout}
            style={{
                width: "100%",
                padding: "0.5rem 0",
                backgroundColor: "#eee",
                color: "#333",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer"
            }}
        >
            Sign Out
        </button>
    )
}
