import React from 'react'
import { observer } from 'mobx-react-lite'
import Money from 'Components/Money'
import ProductImage from 'Components/ProductImage'
import { productStore, uiStore } from 'Stores'
import './ProductDetails.css'

const ProductDetails = observer(() => {
    const { screen } = uiStore
    return (
        <section className={`ProductDetails _${screen}`}>
            <header>
                <h1>{productStore.name}</h1>
                <Money />
            </header>

            <div className='ProductDetails_main'>
                <div className='ProductDetails_main_text'>
                    {
                        productStore.description.map((text, idx) =>
                            <p
                                key={idx}
                                className='ProductDetails_description'
                            >
                                {text}
                            </p>
                        )
                    }

                    {
                        productStore.cautionMessage.map((text, idx) =>
                            <p
                                key={idx}
                                className='ProductDetails_caution'
                            >
                                <span>Caution: </span>{text}
                            </p>                    
                        )
                    }

                    {
                        productStore.patternMessage.map((text, idx) =>
                            <p
                                key={idx}
                                className='ProductDetails_pattern'
                            >
                                <span>Pattern: </span>{text}
                            </p>                    
                        )
                    }
                </div>
                <ProductImage />
            </div>

        </section>
    )
})

export default ProductDetails