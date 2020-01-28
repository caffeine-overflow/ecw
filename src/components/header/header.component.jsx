import React from 'react'
import './header-styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className="logo-container" to="/"></Link>
        <div className="options">
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/shop" >CONTACT</Link>
            {
                currentUser ?
                    (
                        <Link className='option' to='/signin' onClick={() => auth.signOut()}>SIGN OUT</Link>
                    )
                    :
                    (
                        <Link className='option' to='/signin'>SIGN IN</Link>
                    )
            }
        </div>
    </div >
)

const mapStateToProps = (state) => ({ //state is the root reducer
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);