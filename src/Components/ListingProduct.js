import React from 'react'
import './ListingProduct.css'

const ListingProduct = props => {
    const {
        alias,
        image,
        name,
        price,
    } = props.item

    return (
        <article className='ListingProduct'>
            <img alt="" src={`${image}?random=${alias}`}/>
            <div className='ListingProduct_tag'>
                <h1 className='ListingProduct_name'>{name}</h1>
                <div className='ListingProduct_price'>{price}</div>
                <button className='ListingProduct_show interactive'>Show details</button>
                <button className='ListingProduct_add interactive'>Add to cart</button>
            </div>
        </article>
    )
}

export default ListingProduct