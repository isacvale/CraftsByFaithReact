import React from 'react'
import { Link } from 'react-router-dom'
import './FaithLogo.css'

const FaithLogo = () => {
    return (
        <section className="faith-logo">
            <Link to='/'>
                <div className="upper-bar">
                    <h1>Crafts <span className="connector">by</span> Faith</h1>
                </div>
                <div className="lower-bar">
                    <h2>Handmade with love</h2>
                </div>
            </Link>
        </section>
    )
}

export default FaithLogo