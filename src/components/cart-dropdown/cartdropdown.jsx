import React from 'react'
import { Link } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
const CartDropdown = ({ Item }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                Item.length > 0 ? (
                    Item.map(i => <CartItem key={i.id} Item={i} />)
                )
                    : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CartItem />
        <Link className="option" to="/checkout" > <CustomButton>GO TO CHECKOUT</CustomButton></Link>
    </div>
)
export default CartDropdown;