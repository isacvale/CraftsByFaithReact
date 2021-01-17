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
            <Link interactive='true' to="/">Blankets</Link>
            <Link interactive='true' to="/">Animals</Link>
            <Link interactive='true' to="/">Snuggles</Link>
            <Link interactive='true' to="/">Hats</Link>
            <Link interactive='true' to="/">Mittens</Link>
        </nav>                                                                                                                                                                                                                                                                                                                                                      
    </section>
</>

const TabletFauxMenu = () => {
    return (
        <>
            <nav className="main-nav" />
            <section className="categories">
                <UnderMenuCategory smallLabel />
            </section>
        </>
    )
}

const MenuRoundButton = observer(() => {
    const { screen, isMenuButtonOpen } = uiStore

    return (
        <button
            className={`Header__MenuRoundButton interactive ${screen}`}
            onClick={() => uiStore.setValue('isMenuButtonOpen', !isMenuButtonOpen)}
        >
            <Burger />
        </button>
    )
})

const UnderMenuCategory = observer(props => {
    const { screen } = uiStore
    // const categoryLabel = props.smallLabel
    //     ? 'category'
    //     : 'choose a category'
    const categoryLabel = 'category'

    return (
        <div className={`UnderMenuCategory ${screen}`}>
            <label className='DesktopMenu__CategoryLabel'>
                <span>{categoryLabel}</span>
                <span className='__Select_container'>
                    <select className="__Select interactive">
                        <option>Blankets</option>
                        <option>Animals</option>
                        <option>Snuggles</option>
                        <option>Hats</option>
                        <option>Mittens</option>
                    </select>
                </span>
            </label>
        </div>
    )
})

const HeaderNavSelect = observer(() => {
    const { isMenuButtonOpen, screen } = uiStore
    if (screen === 'desktop')
        return null
    
    const links = [
        'products',
        'gallery',
        'about us',
        'e-mail',
        'facebook',
        'twitter'
    ]
    
    return (
        <nav className={`HeaderNavSelect ${isMenuButtonOpen ? '--open' : ''}`}>
            { links.map(cur => 
                <HeaderNavSelectItem key={cur} name={cur} link='/' />
            )}
        </nav>
    )
})

const HeaderNavSelectItem = observer(props => {
    const { isMenuButtonOpen } = uiStore
    const { link, name } = props

    return (
        <div className='HeaderNavSelect__ItemContainer'>
            <Link
                className='HeaderNavSelect__Item interactive'
                to={link}
                tabIndex={isMenuButtonOpen ? null : '-1'}
            >
                    {name}
                </Link>
        </div>
    )
})

const Header = observer(() => {
    const { screen } = uiStore

    return (
        <section>
            <header className={`faith-header _${screen}`}>
                <FaithLogo />
                { screen === 'desktop' ? <DesktopMenu /> : null }
                { screen !== 'desktop' ? <MenuRoundButton /> : null }        
                { screen === 'tablet' ? <TabletFauxMenu /> : null }
            </header>
            <HeaderNavSelect />
            { screen === 'mobile' ? <UnderMenuCategory /> : null }
        </section>
    )
})

export default Header