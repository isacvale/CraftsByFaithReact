import React from 'react'
import Product from 'Components/ProductThumbnail'
import './CartSummary.css'
import iconCart from 'Assets/icon_cart.svg'

const CartSummary = () => {
    return (
        <aside className='CartSummary'>
            <img src={iconCart} alt='Cart summary.'/>
            <div className='CartSummaryProductList'>
                <Product />
                <Product active />
                <Product />
            </div>
        </aside>
    )
}

export default CartSummary