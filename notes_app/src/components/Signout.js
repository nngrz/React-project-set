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
        <button className="signout-button" onClick={handleSignout}>
            Sign Out
        </button>
    )
}
