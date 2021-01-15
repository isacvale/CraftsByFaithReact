import React from 'react'
import {
    observer
} from 'mobx-react-lite'
import { uiStore } from 'Stores.js'
import './SiteCanvas.css'

const SiteCanvas = observer(props => {
    const { screen } = uiStore

    return (
        <div className={`SiteCanvas _${screen}`}>
            { props.children }
        </div>
    )
})

export default SiteCanvas