import React from 'react'
import { observer } from 'mobx-react-lite'
import { cartStore, productStore } from 'Stores'
import Product from 'Components/ProductThumbnail'
import Money from 'Components/Money'
import './CartSummary.css'
// import iconCart from 'Assets/icon_cart.svg'

const CartSummaryCheckout = () => {
    return (
        <footer className='CartSummaryCheckout'>
            <button className='CartSummaryCheckoutButton interactive-l'>
                <Money color='saturated' value={105} small/>
                {/* <div className='_subtitle'>before&nbsp;taxes and&nbsp;shipment</div> */}
                {/* <div className='CartSummary_IconWrapper'>
                    <img className='CartSummary_Icon' src={iconCart} />
                </div> */}
                <div className='CartSummary_Divider' />
                <span className='CartSummaryCheckoutButtonLabel'>Go&nbsp;to checkout</span>
            </button>
        </footer>
    )
}

const CartSummary = observer(() => {
    const { items } = cartStore
    const { index } = productStore

    return (
        <aside className='CartSummary'>
            {/* <img src={iconCart} alt='Cart summary.'/> */}
            <div className='CartSummaryProductList'>
                { items.map((item, idx) =>
                    <Product
                        key={idx}
                        item={{
                            ...item,
                            index: idx
                        }}
                        active={idx === index}
                    />
                )}
            </div>
            <CartSummaryCheckout />
        </aside>
    )
})

export default CartSummary