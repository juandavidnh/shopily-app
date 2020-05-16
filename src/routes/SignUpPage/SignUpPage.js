import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignUpPage.css'

class LoginPage extends Component {
    render() {
        return(
            <section>
                <h2>Sign Up</h2>
                <SignUpForm />
            </section>
        )
    }
}

export default LoginPage