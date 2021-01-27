import React from 'react'
import { observer } from 'mobx-react-lite'
import { productStore } from 'Stores'
import './AddToCart.css'

const AddToCardOption = observer(props => {
    const { code='custom', custom, label, stock = 0 } = props

    const isChecked = (code === productStore.selectedVariation)

    const onChange = () => {
        productStore.setValue('selectedVariation', code)
    }

    return (
        <div className='AddToCard_Option'>
            <label>
                <input
                    type='radio'
                    name='variant'
                    value={label}
                    checked={isChecked}
                    onChange={onChange}
                />
                <span>{label}</span>
            </label>
            { custom
                ? null
                : <div className='AddToCard_Option_Stock'>{stock} in stock</div>
            }
            
        </div>
    )
})

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


// //  qwerty
// const CustomDescription = observer((props) => {
//     const { selectedVariation } = productStore

//     const isCustom = (selectedVariation === 'custom')

//     const [showCustom, setShowCustom] = useState(selectedVariation === 'custom')
//     const isOpen = useTransition(isCustom, () => setShowCustom(false), 2000)

//     if (!showCustom) return null
//     return (
//         // <label className={isOpen}>
//         //     <span className='AddToCard_SectionTitle'>Choose embroidered initials</span>
//         //     <input type='text' className='interactive textInput' />
//         // </label>
//         <label data-isopen={isOpen}>
//             <span className='AddToCard_SectionTitle'>Please detail your request</span>
//             <textarea className='AddToCard_CustomText interactive textInput' />
//         </label>
//     )
// })

const AddToCart = observer(() => {
    const {
        allowCustom,
        customInitials,
        customMessage,
        selectedVariation,
        setValue,
        variations,
    } = productStore
    const isCustom = (selectedVariation === 'custom')

    return (
        <form className='AddToCard'>
            <section className='AddToCard_PickOption'>
                <h1 className='AddToCard_SectionTitle'>Choose option</h1>
                <div className='AddToCard_OptionList'>
                    { variations.map(option =>
                        <AddToCardOption
                            code={option.code}
                            key={option.code}
                            label={option.name}
                            stock={option.stock}
                        />
                    )}

                    { allowCustom
                        ? <AddToCardOption
                            label='Custom request'
                            custom
                        />
                        : null
                    }
                    
                    <label
                        className={`AddToCard_CustomTextWrapper ${isCustom ? '--open' : ''}`}
                        aria-hidden={!isCustom}
                    >
                        <span className='AddToCard_SectionTitle'>
                            Please detail your request
                        </span>
                        <textarea
                            className='AddToCard_CustomText interactive textInput'
                            disabled={!isCustom}
                            value={isCustom ? customMessage : ''}
                            onChange={ev => {
                                setValue('customMessage', ev.target.value)
                            }}
                        />
                    </label>
                </div>
            </section>

            <section className='AddToCard_PickInitials'>
                <label>
                    <span className='AddToCard_SectionTitle'>Choose embroidered initials</span>
                    <input
                        type='text'
                        className='interactive textInput'
                        value={customInitials}
                        onChange={ ev => {
                            const initials = ev.target.value.substring(0, 2)
                            setValue('customInitials', initials)
                        }}
                    />
                </label>
            </section>

            <section className='AddToCard_Buttons'>
                <AddToCardButton>Add to cart</AddToCardButton>
                <AddToCardButton>Add another to cart</AddToCardButton>
                <AddToCardButton>Remove from cart</AddToCardButton>                
            </section>
        </form>
    )
})

export default AddToCart