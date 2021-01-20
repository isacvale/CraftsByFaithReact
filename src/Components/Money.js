import React from 'react'
import './Money.css'

const Money = props => {
    return (
        <div className='Money'>
            <span className='Money_currency'>USD</span>
            <span className='Money_dollars'>61</span>
            <span className='Money_cents'>,00</span>
        </div>
    )
}

export default Money