import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { uiStore } from 'Stores.js'
import FaithLogoThin from 'Components/FaithLogoThin'
import BurgerButton from 'Components/BurgerButton'
import Icon from 'Components/Icon'
import { useAnimationConfirm } from 'Utils'
import './HeaderThin.css'
import { set } from 'mobx'

const NavLink = props => {
    const { children, selected, to } = props
    return (
        <Link to={to} className='HeaderThin_NavLink interactive'>
            {children}
        </Link>
    )
}

const HeaderNavMobile = props => {
    return (
        <div className='HeaderThin_HeaderNavMobile'>
            <BurgerButton />
        </div>
    )
}

const HeaderNavLarge = props => {
    return (        
        <div className='HeaderThin_options'>
            <nav>
                <NavLink to='/'>Products</NavLink>
                <NavLink to='/'>About us</NavLink>
            </nav>
            <NavLink
                to='/'
            >
                <Icon icon='user' size='3ex' color='hsla(205, 28%, 47%, 1)'/>
                <span>login</span>
            </NavLink>
        </div>
    )
}

const NavDropdown = observer(props => {
    const { isMenuButtonOpen } = uiStore
    const statusCode = useAnimationConfirm(isMenuButtonOpen)
    if (statusCode === -1) return null

    const status = ['_close', '_open'][statusCode]
    console.log('classes', `HeaderThin_NavDropdown ${status}`)
    return (
        <nav className={`HeaderThin_NavDropdown ${status}`}>
            <NavLink to='/'>Products</NavLink>
            <NavLink to='/'>About us</NavLink>
            <NavLink
                to='/'
            >
                <Icon icon='user' size='3ex' color='hsla(205, 28%, 47%, 1)'/>
                <span>login</span>
            </NavLink>
        </nav>
    )
})

const HeaderThin = observer(props => {
    const screen = uiStore.screen ?? ''
    const version = uiStore.isPageTop ? '_regular' : '_min'

    return (
        <header className={`HeaderThin _${screen} ${version}`} {...props}>
            <Link
                to='/'
                className='HeaderThin_link-wrapper interactive-l'
            >
                <FaithLogoThin {...{ screen, version }} />
            </Link>
            { screen === 'mobile'
                ? <HeaderNavMobile />
                : <HeaderNavLarge />
            }
            { screen === 'mobile' && <NavDropdown /> }
        </header>
    )
})



export default HeaderThin