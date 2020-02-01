import React from 'react'
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout.component/checkout-item'

const CheckoutPage = ({ cartItems, removeItems, calculateTotal }) => {
    var total = calculateTotal();
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(i => (
                <CheckoutItem key={i.id} cartItem={i} removeItems={removeItems} />
            ))}

            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

export default CheckoutPage