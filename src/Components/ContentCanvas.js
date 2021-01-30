import React from 'react'
import { observer } from 'mobx-react-lite'
import { uiStore } from 'Stores'
import './ContentCanvas.css'

const ContentCanvas = observer(props => {
    const { screen } = uiStore
    
    return (
        <section className={`ContentCanvas ${screen}`}>
            {props.children}
        </section>
    )
})

export default ContentCanvas