import React from 'react'

export default function TableHeader() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" style={{padding: "8px 100px"}}>Image</a>
                    <a class="nav-link" style={{padding: "8px 100px"}}>Home</a>
                    <a class="nav-link" style={{padding: "8px 100px"}}>Phone</a>
                    <a class="nav-link" style={{padding: "8px 100px"}}>Email</a>
                    <a class="nav-link" style={{padding: "8px 100px"}}>DOB</a>
                </div>
            </div>
        </nav>
    )
}
