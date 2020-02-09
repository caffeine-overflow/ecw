import React from 'react'
import './cart-item.styles.scss'

const cartItem = ({ Item }) => {
    return (
        <div className='cart-item'>
            <img src={Item.imageUrl[0].image} alt='item' />
            <div className='item-details'>
                <span className='name'>{Item.name}</span>
                <span className='price'>
                    {Item.quantity} x ${Item.price}
                </span>
            </div>
        </div>
    );
}

export default cartItem;