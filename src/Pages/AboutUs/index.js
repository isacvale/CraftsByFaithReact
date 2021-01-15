import React from 'react'
import Header from 'Components/Header'
import SiteCanvas from 'Components/SiteCanvas'
import { mainStore } from 'Stores.js'

const ProductsPage = () => {
    mainStore.page = 'about'
    return (
        <SiteCanvas>
            <Header />
        </SiteCanvas>
    )
}

export default ProductsPage