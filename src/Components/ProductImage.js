import React from 'react'
import mainImage from 'Assets/Blue Elephant.jpg'
import arrowIcon from 'Assets/arrow_left.svg'
import './ProductImage.css'

const ProductImage = props => {
    return (
        <div className='ProductImage'>
            <img alt='Main pic.' className='ProductImage_MainImage' src={mainImage} />
            <div className='ProductImage_controllers'>
                <img
                    className='ProductImage_arrow_left'
                    src={arrowIcon}
                />
                <div>12/30</div>
                <img
                    className='ProductImage_arrow_right'
                    src={arrowIcon}
                />
            </div>
        </div>
    )
}

export default ProductImage