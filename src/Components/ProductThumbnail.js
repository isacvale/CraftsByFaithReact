import React from 'react'
import './ProductThumbnail.css'
import image from 'Assets/Blue Elephant.jpg'

const ProductThumbnail = props => {
    const isActive = props.active ? '_active' : ''
    return (
        <div
            className={`ProductThumbnail ${isActive}`}
        >
            <div className='ProductThumbnailCanvas' />
            <button className='ProductThumbnailButton interactive-l'>
                <img className='ProductThumbnailImage' src={image} alt='' />
            </button>
        </div>
    )
}

export default ProductThumbnail