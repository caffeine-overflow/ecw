import React from 'react'
import './cart-icon.styles.scss'
import Logo from '../../assets/cart.svg'

const CartIcon = ({ showCartHandler, Item }) => {
    var count = 0;
    Item.map(i => count += i.quantity)
    return (
        <div className="cart-icon">
            <img src={Logo} className="shopping-icon" alt="logo" onClick={showCartHandler} />
            <span className="item-count" onClick={showCartHandler}>{count}</span>
        </div>
    )
}

export default CartIcon;