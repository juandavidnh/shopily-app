import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

class LoginPage extends Component {
    static defaultProps = {
        users: []
    }

    render() {
        return(
            <section>
                <h2>Log In</h2>
                <LoginForm users = {this.props.users}/>
            </section>
        )
    }
}

export default LoginPage