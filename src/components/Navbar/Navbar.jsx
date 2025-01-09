import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-md py-4 fixed-top">
            <div className="container">
                <Link className="navbar-brand ancor" to="home">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link ancor" aria-current="page" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ancor" to="portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link ancor" to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
  )
}


