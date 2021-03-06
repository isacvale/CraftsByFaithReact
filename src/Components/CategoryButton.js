import React from 'react'
import { Link } from 'react-router-dom'
import { mainStore } from 'Stores'
import './CategoryButton.css'

const CategoryButtons = props => {
    const category = mainStore.categories
        .find(cur => cur.name === props.name)

    return (
        <Link
            className='CategoryButton interactive'
            to='/'
        >
            <img
                className='CategoryButton_Image'
                src={`${process.env.PUBLIC_URL}/images/${category.thumbnail}`}
                alt=''
            />
            <div className='CategoryButton_Label'>
                { category.label }
            </div>
        </Link>
    )
}

export default CategoryButtons