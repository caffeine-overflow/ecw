import React, { Component } from 'react';
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout.component/checkout-item'


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
                        <CheckoutItem key={i.id} cartItem={i} removeItems={this.props.removeItems} />
                    ))
                }

                <div className='total'>TOTAL: ${this.props.calculateTotal()}</div>
            </div >
        )
    }
}

export default CheckoutPage