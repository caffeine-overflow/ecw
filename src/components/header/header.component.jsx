import React from 'react'
import './header-styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.util'
import CartIcon from '../cart-icon/cart.componenet'
import CartDropdown from '../cart-dropdown/cartdropdown'
import Icon from '../../assets/crown.svg'


const Header = ({ currentUser, showCart, showCartHandler, Item }) => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <div className="navHead" >Oh</div>
            <div className="navHead2" > la la</div>

        </Link>
        <div className="options">
            <Link className="logo-container" to="/" >
            </Link>
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/checkout" >CHECKOUT</Link>
            {
                currentUser ?
                    (
                        <Link className='option' to='/signin' onClick={() => auth.signOut()}>SIGN OUT</Link>
                    )
                    : (
                        <Link className='option' to='/signin'>SIGN IN</Link>
                    )
            }
            <CartIcon showCartHandler={showCartHandler} Item={Item} />
        </div>
        {
            showCart ? <CartDropdown Item={Item} showCartHandler={showCartHandler} /> : ''
        }
    </div >
)

export default Header;