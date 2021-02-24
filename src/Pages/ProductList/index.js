import React from 'react'
import {
    useParams
} from 'react-router-dom'
import Header from 'Components/Header'
import SiteCanvas from 'Components/SiteCanvas'
import ContentCanvas from 'Components/ContentCanvas'
import Listing from 'Components/Listing'
import './ProductList.css'

const ProductList = () => {
    const { alias } = useParams()
    console.log('--->', useParams())

    return (
        <SiteCanvas>
            <Header />
            <main className='ProductListMain'>
                <ContentCanvas stripped>
                    <Listing />
                </ContentCanvas>
            </main>
        </SiteCanvas>
    )
}

export default ProductList