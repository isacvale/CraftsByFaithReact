import React from 'react'
import Header from 'Components/Header'
import SiteCanvas from 'Components/SiteCanvas'
import ProductDetails from 'Components/ProductDetails'
import CartSummary from 'Components/CartSummary'
import './ProductsPage.css'

const ProductsPage = () => {
    return (
        <SiteCanvas>
            <Header />
            <main className='ProductsPageMain'>
                <ProductDetails />
                <CartSummary />
            </main>
        </SiteCanvas>
    )
}

export default ProductsPage