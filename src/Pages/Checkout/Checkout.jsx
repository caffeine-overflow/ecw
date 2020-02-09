import React, { Component } from 'react';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout.component/checkout-item'
import StripeButton from '../../components/stripe-payments/stripe-button'


class CheckoutPage extends Component {
    constructor(props) {
        super();
        this.state = {
            currentUser: null,
            showCart: false,
            cartItems: []
        }
    }
    render() {
        if (this.props.showCart === true)
            this.props.showCartHandler();
        const total = this.props.calculateTotal();
        return (
            < div className='checkout-page' >
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
                {
                    this.props.cartItems.map(i => (
                        <CheckoutItem
                            key={i.id}
                            cartItem={i}
                            removeItems={this.props.removeItems}
                            addItems={this.props.addItems}
                            deleteItems={this.props.deleteItems}
                        />
                    ))
                }

                <div className='total'>TOTAL: ${total}</div>
                {
                    total > 0 ?
                        <div className='test-warning'>
                            Please use the following test credit card for payments <br />
                            5555555555554444	Mastercard	Any 3 digits	Any future date
                            </div>
                        : ''
                }
                {
                    total > 0 ?
                        <StripeButton total={total} resetCart={this.props.resetCart} cartItems={this.props.cartItems} /> : ''
                }
            </div >
        )
    }
}

export default CheckoutPage