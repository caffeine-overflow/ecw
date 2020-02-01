import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
const CartDropdown = ({ Item }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                Item.map(i => <CartItem key={i.id} Item={i} />)
            }
        </div>
        <CartItem />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
export default CartDropdown;