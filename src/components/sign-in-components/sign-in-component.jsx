import React, { Component } from 'react';
import './sign-in-styles.scss'
import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase.util.js'
class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="signInheader">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" value={this.state.email} handleChange={this.handleChange} />
                    <FormInput name="password" label="password" value={this.state.password} handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;