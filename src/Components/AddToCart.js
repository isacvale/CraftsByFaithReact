import React from 'react'
import './AddToCart.css'

const AddToCardOption = props => {
    const { label, stock = 0, custom } = props
    return (
        <div className='AddToCard_Option'>
            <label>
                <input
                    type='radio'
                    name='variant'
                    value={label}
                />
                <span>{label}</span>
            </label>
            { custom
                ? null
                : <div className='AddToCard_Option_Stock'>{stock} in stock</div>
            }
            
        </div>
    )
}

const AddToCardButton = props => {
    const { children: label } = props
    return (
        <div className='AddToCardButton_Container'>
            <button
                className='AddToCardButton interactive-l'
            >
                {label}
            </button>
        </div>
    )
}

const AddToCart = () => {
    return (
        <form className='AddToCard'>
            <section className='AddToCard_PickOption'>
                <h1 className='AddToCard_SectionTitle'>Choose option</h1>
                <div className='AddToCard_OptionList'>

                    <AddToCardOption label='Red' stock='1' />
                    <AddToCardOption label='Blue' stock='2' />
                    <AddToCardOption label='Yellow' stock='3' />
                    <AddToCardOption label='Custom request' custom/>
                    {
                        <label>
                            <span className='AddToCard_SectionTitle'>Please detail your request</span>
                            <textarea className='AddToCard_CustomText interactive textInput' />
                        </label>
                    }

                </div>
            </section>

            <section className='AddToCard_PickInitials'>
                <label>
                    <span className='AddToCard_SectionTitle'>Choose embroidered initials</span>
                    <input type='text' className='interactive textInput' />
                </label>
            </section>

            <section className='AddToCard_Buttons'>
                <AddToCardButton>Add to cart</AddToCardButton>
                <AddToCardButton>Add another to cart</AddToCardButton>
                <AddToCardButton>Remove from cart</AddToCardButton>                
            </section>
        </form>
    )
}

export default AddToCart