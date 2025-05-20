import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="/assets/sph-logo.png" alt="Logo" />
                </div>
                <div className="navbar-links">
                    <Link to="#" className='links' >Home</Link>
                    <Link to="#" className='links' >Hackathon</Link>
                    <Link to="#" className='links' >Pannel</Link>
                    <Link to="#" className='links'>Pitches</Link>
                    <Link to="#" className='links'>Contacts</Link>
                </div>
            </div>
            <div className="hero">
                <div className="hero-image">
                    <img src="/assets/innovation.webp" alt="Hackathon" />
                </div>
            </div>
        </div>
    )
}
