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
            <img src={Icon} className="logo" alt="logo" />
        </Link>
        <div className="options">
            <Link className="logo-container" to="/" >
            </Link>
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/shop" >CONTACT</Link>
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
            showCart ? <CartDropdown Item={Item} /> : ''
        }
    </div >
)

export default Header;