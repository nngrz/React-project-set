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
                position: "absolute",
                top: "1rem",
                right: "1rem",
                padding: "0.4rem 0.8rem",
                backgroundColor: "#e5e7eb",
                color: "#111827",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                cursor: "pointer"
            }}
        >
            Sign Out
        </button>
    )
}
