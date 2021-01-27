import React from 'react'
import { observer } from 'mobx-react-lite'
import { productStore } from 'Stores'
import './ProductThumbnail.css'

const ProductThumbnail = observer(props => {
    const { item } = props
    const {
        image,
        index,
    } = item

    const isActive = props.active ? '_active' : ''

    const onClick = () => {
        productStore.setValue('index', index)
        productStore.loadProduct(index)
    }

    return (
        <div
            className={`ProductThumbnail ${isActive}`}
        >
            <div className='ProductThumbnailCanvas' />
            <button
                className='ProductThumbnailButton interactive-l'
                onClick={onClick}
            >
                <img className={'ProductThumbnailImage'} src={`/images/${image}`} alt='' />
            </button>
        </div>
    )
})

export default ProductThumbnail