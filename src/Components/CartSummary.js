import React from 'react'
import { observer } from 'mobx-react-lite'
import { cartStore, productStore } from 'Stores'
import Product from 'Components/ProductThumbnail'
import Money from 'Components/Money'
import './CartSummary.css'

const CartSummaryCheckout = () => {
    return (
        <footer className='CartSummaryCheckout'>
            <button className='CartSummaryCheckoutButton interactive-l'>
                <Money color='saturated' value={105} small/>
                <div className='CartSummary_Divider' />
                <span className='CartSummaryCheckoutButtonLabel'>Go&nbsp;to checkout</span>
            </button>
        </footer>
    )
}

const CartSummary = observer(props => {
    const { noSelection, ...otherProps } = props
    const { items } = cartStore
    const { index } = productStore

    return (
        <aside className='CartSummary' {...otherProps}>
            <div className='CartSummaryProductList'>
                { items.map((item, idx) =>
                    <Product
                        key={idx}
                        item={{
                            ...item,
                            index: idx
                        }}
                        active={!noSelection && idx === index}
                    />
                )}
            </div>
            <CartSummaryCheckout />
        </aside>
    )
})

export default CartSummary