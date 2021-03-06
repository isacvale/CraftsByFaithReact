import React from 'react'
import './FaithLogoThin.css'

const FaithLogoThin = ({ screen, version }) => {
    return (
        <article className={`FaithLogoThin _${screen} ${version}`}>
            <div className="FaithLogoThin_LeftBar">
                <h1>Crafts <span className="FaithLogoThin_connector">by</span> Faith</h1>
            </div>
            <div className="FaithLogoThin_RightBar">
                <h2>Handmade with love</h2>
            </div>
        </article>
    )
}

export default FaithLogoThin