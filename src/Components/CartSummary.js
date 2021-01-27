import React from 'react'
import Product from 'Components/ProductThumbnail'
import Money from 'Components/Money'
import './CartSummary.css'
// import iconCart from 'Assets/icon_cart.svg'

const CartSummaryCheckout = () => {
    return (
        <footer className='CartSummaryCheckout'>
            <button className='CartSummaryCheckoutButton interactive-l'>
                <Money color='saturated' value={105} />
                {/* <Money /> */}
                {/* <div className='_title'>Subtotal</div> */}
                <div className='_subtitle'>before&nbsp;taxes and&nbsp;shipment</div>
                {/* <img src={iconCart} /> */}
                <span className='CartSummaryCheckoutButtonLabel'>Go&nbsp;to checkout</span>
            </button>
        </footer>
    )
}

const CartSummary = () => {
    return (
        <aside className='CartSummary'>
            {/* <img src={iconCart} alt='Cart summary.'/> */}
            <div className='CartSummaryProductList'>
                <Product />
                <Product active />
                <Product />
            </div>
            <CartSummaryCheckout />
        </aside>
    )
}

export default CartSummary