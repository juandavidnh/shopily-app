import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

class LoginPage extends Component {
    render() {
        return(
            <section>
                <h2>Log In</h2>
                <LoginForm />
            </section>
        )
    }
}

export default LoginPage