import React from 'react'
import {
    Link
} from 'react-router-dom'
import FaithLogo from './FaithLogo'
import './Header.css'
import iconMail from 'Assets/icon_mail.svg'
import iconFacebook from 'Assets/icon_facebook.svg'
import iconTwitter from 'Assets/icon_twitter.svg'

const Header = () => {
    return (
        <header className="faith-header">
            <FaithLogo />
            <nav className="main-nav">
                <div class="_selected">Products</div>
                <Link to='/'>lalala</Link>
                <a href="/">Gallery</a>
                <a href="/">About Us</a>
                <a class="link-icon" href="/">
                    <img src={iconMail} alt="E-mail."/>
                </a>
                <a className="link-icon" href="/">
                    <img src={iconFacebook} alt="Facebook." />
                </a>
                <a className="link-icon" href="/">
                    <img src={iconTwitter}  alt='Twitter' />
                </a>
            </nav>
            <section className="categories">
                <nav>
                    <a href="/">Blankets</a>
                    <a href="/">Animals</a>
                    <a href="/">Snuggles</a>
                    <a href="/">Hats</a>
                    <a href="/">Mittens</a>
                </nav>
            </section>
        </header>
    )
}

export default Header