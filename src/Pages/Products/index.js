import React from 'react'
import Header from 'Components/Header'
import SiteCanvas from 'Components/SiteCanvas'
import ProductDetails from 'Components/ProductDetails'
import { mainStore } from 'Stores.js'

const ProductsPage = () => {
    mainStore.page = 'products'
    return (
        <SiteCanvas>
            <Header />
            <ProductDetails />
        </SiteCanvas>
    )
}

export default ProductsPage