import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ total, resetCart, cartItems }) => {
    const totalPrice = total * 100;
    const publishKey = 'pk_test_l2EGvVGHdC2qspKcSVvEoKQd00VxRJeU9K';

    const onToken = (token) => {

        resetCart();
        alert("Payment successfull")
        var order = {
            "email": token.email,
            "address_city": token.card.address_city,
            "address_country": token.address_country,
            "address_line1": token.card.address_line1,
            "address_line1_check": token.card.address_line1_check,
            "address_line2": token.card.address_line2,
            "address_state": token.card.address_state,
            "address_zip": token.card.address_zip,
            "address_zip_check": token.card.address_zip_check,
            "brand": token.card.brand,
            "country": token.card.country,
            "cvc_check": token.card.cvc_check,
            "exp_month": token.card.exp_month,
            "exp_year": token.card.exp_year,
            "funding": token.card.funding,
            "last4": token.card.last4,
            "order": cartItems,
            "date": Date.now()
        }
        axios({
            url: '/api/save',
            method: 'POST',
            data: order
        })
            .then(() => {
                console.log("Data has been sent to server")
            })
            .catch(() => console.log("ERROR"))
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