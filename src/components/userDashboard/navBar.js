import React from "react";
import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import userDashboardstyle from '../assets/styles/userDashboard.css';

function NavBar({ handleUserProfileClick }) {
    return (
        <nav className="home-navbar">
            <h1 className="home-title">bag air</h1>
            <ul>
                <li>
                    <a href="#">
                        <FaBell className="navbar-icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaEnvelope className="navbar-icon" />
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleUserProfileClick}>
                        <FaUser className="navbar-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
