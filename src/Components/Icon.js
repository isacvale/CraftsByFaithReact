import React from 'react'
import iconSet from 'Assets/icomoon/selection.json'
import IcomoonReact from 'icomoon-react'

const Icon = props => {
    return (
        <IcomoonReact
            iconSet={iconSet}
            {...props}
        />
    )
}

export default Icon