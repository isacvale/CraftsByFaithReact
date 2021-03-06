import React from 'react'
import { observer } from 'mobx-react-lite'
import Burger from 'Components/Burger'
import { uiStore } from 'Stores'
import './BurgerButton.css'

const BurgerButton = observer(() => {
    const { screen, isMenuButtonOpen } = uiStore

    return (
        <button
            className={`BurgerButton interactive ${screen}`}
            onClick={() => uiStore.setValue('isMenuButtonOpen', !isMenuButtonOpen)}
        >
            <Burger />
        </button>
    )
})

export default BurgerButton