import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ total, resetCart }) => {
    const totalPrice = total * 100;
    const publishKey = 'pk_test_l2EGvVGHdC2qspKcSVvEoKQd00VxRJeU9K';
    const onToken = (token) => {
        resetCart();
        alert("Payment successfull")
    }
    return (
        <StripeCheckout
            lable='Pay now'
            name='Oh la la'
            billingAddress
            shippingAddress
            image='https://i.ibb.co/s96FpdP/brown-shearling.png'
            description={`Your total is $${total}`}
            amount={totalPrice}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishKey}
        />
    )

}

export default StripeCheckoutButton;