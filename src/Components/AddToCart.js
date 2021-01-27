import React from 'react'
import { observer } from 'mobx-react-lite'
import { productStore } from 'Stores'
import './AddToCart.css'

const AddToCardOption = observer(props => {
    const {
        code = 'custom',
        custom,
        label,
        stock = 0,
    } = props

    const isChecked = (code === productStore.variationCode)

    const onChange = () => {
        productStore.setValue('variationCode', code)
    }

    return (
        <div className={`AddToCard_Option`}>
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
    const {
        children: label,
        danger,
        disabled,
        primary,
    } = props

    const typeClass = primary ? '_primary' : danger ? '_danger' : '_common'

    return (
        <div className={`AddToCardButton_Container ${typeClass}`}>
            <button
                className={`AddToCardButton interactive${primary ? '-l' : ''}`}
                disabled={disabled ? true : null}
            >
                {label}
            </button>
        </div>
    )
}

const AddToCart = observer(() => {
    const {
        allowCustom,
        customInitials,
        customMessage,
        isChanged,
        variationCode,
        setValue,
        variations,
    } = productStore
    const isCustom = (variationCode === 'custom')

    const disabledSave = !isChanged

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
                <AddToCardButton
                    primary
                    disabled={disabledSave}
                >Save change</AddToCardButton>
                <AddToCardButton>Add one more</AddToCardButton>
                <AddToCardButton danger>Remove from cart</AddToCardButton>                
            </section>
        </form>
    )
})

export default AddToCart