import React from 'react'
import './cart-icon.styles.scss'
import Logo from '../../assets/cart.svg'

const CartIcon = ({ showCartHandler }) => (
    <div className="cart-icon">
        <img src={Logo} className="shopping-icon" alt="logo" onClick={showCartHandler} />
        <span className="item-count">0</span>
    </div>
)

export default CartIcon;