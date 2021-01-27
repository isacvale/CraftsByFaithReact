import React from 'react'
import { observer } from 'mobx-react-lite'
import AddToCart from 'Components/AddToCart'
import Money from 'Components/Money'
import ProductImage from 'Components/ProductImage'
import { productStore, uiStore } from 'Stores'
import './ProductDetails.css'

const ProductDetails = observer(() => {
    const { screen } = uiStore
    const {
        cautionMessage,
        description,
        name,
        patternMessage,
        price,
    } = productStore

    return (
        <section className={`ProductDetails _${screen}`}>
            <header>
                <h1>{name}</h1>
                <Money value={price} />
            </header>

            <div className='ProductDetails_main'>

                <ProductImage />

                <div className='ProductDetails_main_text'>
                    <div
                        className='ProductDetails_description'
                        dangerouslySetInnerHTML={{
                            __html: description
                        }}
                    />
                    <div
                        className='ProductDetails_caution'
                        dangerouslySetInnerHTML={{
                            __html: cautionMessage
                        }}
                    />
                    <div
                        className='ProductDetails_pattern'
                        dangerouslySetInnerHTML={{
                            __html: patternMessage
                        }}
                    />
                </div>

                <AddToCart />
            </div>

        </section>
    )
})

export default ProductDetails