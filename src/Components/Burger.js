import React from 'react'
import {
    observer
} from 'mobx-react-lite'
import { uiStore } from 'Stores'
import './Burger.css'

const Burger = observer(() => {
    const { isMenuButtonOpen, width } = uiStore
    const burgerClasses = `hamburger hamburger--collapse ${isMenuButtonOpen ? 'is-active' : ''}`
    const scale = Math.min(0.6, 0.5 + 0.1 * width / 480)

    return(
        <div
            className={burgerClasses}
            style={{
                // padding: '0 0 0 2px',
                transform: `scale(${scale})`
            }}
        >
            <div className="hamburger-box">
                <div className="hamburger-inner" />
            </div>
        </div>
    )
})

export default Burger