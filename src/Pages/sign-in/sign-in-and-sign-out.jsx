import React from 'react'
import './sign-in-and-sign-out.scss'
import SignIn from '../../components/sign-in-components/sign-in-component'
import SignUp from '../../components/sign-up-components/sign-up-component'


const SignPage = () => (
    <div className="sign-in-and-sign-up" >
        <SignIn />
        <SignUp />
    </div >
)

export default SignPage;