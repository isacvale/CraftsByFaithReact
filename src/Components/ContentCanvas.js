import React from 'react'
import { observer } from 'mobx-react-lite'
import { uiStore } from 'Stores'
import './ContentCanvas.css'

const ContentCanvas = observer(props => {
    const { screen } = uiStore
    const { children, stripped } = props

    const classes = `ContentCanvas _${screen} ${stripped ? '_stripped' : ''}`
    
    return (
        <section className={classes}>
            {children}
        </section>
    )
})

export default ContentCanvas