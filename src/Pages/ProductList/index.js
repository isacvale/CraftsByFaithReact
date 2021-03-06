import React from 'react'
import {
    useParams
} from 'react-router-dom'
import Header from 'Components/HeaderThin'
import SiteCanvas from 'Components/SiteCanvas'
import ContentCanvas from 'Components/ContentCanvas'
import Listing from 'Components/Listing'
import CartSummary from 'Components/CartSummary'
import './ProductList.css'

const ProductList = () => {
    const { alias } = useParams()
    console.log('--->', useParams())

    return (
        <SiteCanvas>
            <Header style={{ gridArea: 'header' }}/>
            <main className='ProductListMain' style={{ gridArea: 'main' }}>
                <ContentCanvas stripped>
                    <Listing />
                </ContentCanvas>
            </main>
            <CartSummary  style={{ gridArea: 'nav' }}/>
        </SiteCanvas>
    )
}

export default ProductList