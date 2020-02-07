
import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItems, addItems, deleteItems }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl[0].image} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItems(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItems(cartItem)}>&#10095; </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => deleteItems(cartItem)}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
