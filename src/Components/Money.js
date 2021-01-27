import React from 'react'
import './Money.css'

const getDollarsAndCents = (value='0.00') => {
    const regex = /(\d+)\.?(\d*)/
    const values = String(value).match(regex)
    return ({
        dollars: values[1] || '0',
        cents: values[2] || '00'
    })
}

const Money = props => {
    const { color, small, value } = props
    const { dollars, cents} = getDollarsAndCents(value)

    if (!value)
        return (
            <div className={`Money ${color || ''}`}>
                <span className='Money_free'>FREE</span>
            </div>
        )

    return (
        <div className={`Money ${color || ''} ${small ? '_small' : ''}`}>
            <span className='Money_currency'>$</span>
            <span className='Money_dollars'>{dollars}</span>
            <span className='Money_cents'>{cents}</span>
        </div>
    )
}

export default Money