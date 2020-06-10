import React, { Component } from 'react'
import './LoginForm.css'
import { Link, withRouter } from 'react-router-dom'

class LoginForm extends Component {
    static defaultProps = {
        users: [],
        login: () => {}
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {email, password} = e.target

        this.props.login(email.value, password.value)
    }

    render() {
        return(
            <form 
                className="loginForm"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" autoComplete="on" /><br />
                <button className="loginbutton" type="submit">Submit</button>
                <p><Link to="/signup">I don't have an account yet</Link></p>
            </form>
        )
    }
}

export default withRouter(LoginForm)

