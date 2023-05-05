import React from 'react'
import { Link } from 'react-router-dom'
import BagAirLogo from  '../assets/images/bagairLogo.png';
import homePagestyle from '../assets/styles/homePage.css';
import lang from '../../lang.js';

export default function HomePage() {
    return (
        <header>
            <img src={BagAirLogo} className="bagair-logo" alt="Bag Air Logo" />
            <h1 className="main-title">{lang.homeTitle}</h1>
            <h3 className="main-heading">{lang.homeHeading}</h3>
            <p className="main-para">{lang.homeParagraph}</p>
            <div className="main-buttons">
                <button className="login-button" id="login-btn" onClick={() => window.open('/login', '_blank')}>
                    Sign in
                </button>
                <button className="register-button" id="register-btn" onClick={() => window.open('/signup', '_blank')}>
                    Create new account
                </button>
            </div>
        </header>

    )
}
