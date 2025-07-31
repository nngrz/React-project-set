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
                backgroundColor: "#e5e7eb", // light gray, tailwind: bg-gray-200
                color: "#111827",           // dark gray text, tailwind: text-gray-900
                border: "1px solid #d1d5db", // light border, tailwind: border-gray-300
                borderRadius: "0.375rem",   // rounded-md
                fontSize: "0.875rem",       // text-sm
                fontWeight: "500",
                cursor: "pointer"
            }}
        >
            Sign Out
        </button>
    )
}