import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

class LoginPage extends Component {
    static defaultProps = {
        users: [],
        login: () => {}
    }

    render() {
        return(
            <section className="loginPage">
                <h2 className="loginTitle">Log In</h2>
                <LoginForm users={this.props.users} login={this.props.login}/>
            </section>
        )
    }
}

export default LoginPage