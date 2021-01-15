import React from 'react'
import {
    Link
} from 'react-router-dom'
import {
    observer
} from 'mobx-react-lite'
import Burger from './Burger'

import FaithLogo from './FaithLogo'
import { mainStore, uiStore } from 'Stores.js'

import './Header.css'
import iconMail from 'Assets/icon_mail.svg'
import iconFacebook from 'Assets/icon_facebook.svg'
import iconTwitter from 'Assets/icon_twitter.svg'

const MainNavLink = observer(props => {
    const { page } = mainStore
    const { label, to } = props
    return to === page
        ? <div className="_selected">{label}</div>
        : <Link to={`/${to}`}>{label}</Link>
})

const DesktopMenu = () =>
<>
    <nav className="main-nav">
        <MainNavLink to='products' label='Products'/>
        <MainNavLink to='gallery' label='Gallery'/>
        <MainNavLink to='about' label='About Us'/>

        <Link className="link-icon" to="/">
            <img src={iconMail} alt="E-mail."/>
        </Link>
        <Link className="link-icon" to="/">
            <img src={iconFacebook} alt="Facebook." />
        </Link>
        <Link className="link-icon" to="/">
            <img src={iconTwitter}  alt='Twitter' />
        </Link>
    </nav>
    <section className="categories">
        <span className='DesktopMenu__CategoryLabel'>choose a category</span>
        <nav>
            <Link to="/">Blankets</Link>
            <Link to="/">Animals</Link>
            <Link to="/">Snuggles</Link>
            <Link to="/">Hats</Link>
            <Link to="/">Mittens</Link>
        </nav>
    </section>
</>

const TabletFauxMenu = () => {
    return (
        <>
            <nav className="main-nav" />
            <section className="categories" />
        </>
    )
}

const MenuRoundButton = observer(() => {
    const { isMenuButtonOpen } = uiStore
    return (
        <button
            className='Header__MenuRoundButton'
            onClick={() => uiStore.setValue('isMenuButtonOpen', !isMenuButtonOpen)}
        >
            <Burger />
        </button>
    )
})

const UnderMenuCategory = () => {
    return (
        <div className='UnderMenuCategory'>
            <label className='DesktopMenu__CategoryLabel'>
                <span>choose a category</span>
                <select className="__Select">
                    <option>Blankets</option>
                    <option>Animals</option>
                    <option>Snuggles</option>
                    <option>Hats</option>
                    <option>Mittens</option>
                </select>
            </label>
        </div>
    )
}

const Header = observer(() => {
    const { screen } = uiStore

    return (
        <section>
            <header className={`faith-header _${screen}`}>
                <FaithLogo />
                { screen === 'desktop' ? <DesktopMenu /> : null }
                { screen === 'tablet' ? <TabletFauxMenu /> : null }
                { screen !== 'desktop' ? <MenuRoundButton /> : null }        
            </header>
            <UnderMenuCategory />
        </section>
    )
})

export default Header