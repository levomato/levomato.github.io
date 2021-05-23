import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <div className="nav-link">
                        <i className="fas fa-power-off fa-primary"></i>
                        <span className="link-text">Wilkommen</span>

                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <i className="far fa-user fa-primary"></i>
                        <span className="link-text">Über</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/address" className="nav-link">
                        <i className="far fa-address-card fa-primary"></i>
                        <span className="link-text">Stammdaten</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/education" className="nav-link">
                        <i className="fas fa-user-graduate fa-primary"></i>
                        <span className="link-text">Ausbildung</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/workexperience" className="nav-link">
                        <i className="fas fa-brain fa-primary"></i>
                        <span className="link-text">Berufserfahrung</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/jobs" className="nav-link">
                        <i className="fas fa-hammer fa-primary"></i>
                        <span className="link-text">Jobs</span>
                    </Link>
                </li>



            </ul>
        </nav>
    )
}

export default NavBar;