import React from 'react'
import Product from 'Components/ListingProduct'
import  { display } from 'Stores'
import './Listing.css'

const Listing = () => {
    return (
        <section className='Listing'>
            { display.map((item, count) =>
                <Product
                    key={item.alias}
                    item={item}
                />
            )}
        </section>
    )
}

export default Listing