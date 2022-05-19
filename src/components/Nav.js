import React from "react"
import logo from "../images/logo.png"

export default function Nav() {
    return (
        <div className="navbar">
            <span className="navbar--title">
                <img src={logo} className="navbar--logo" alt="a white globe icon"/>my travel journal.
            </span>
        </div>
    )
}