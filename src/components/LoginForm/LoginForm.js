import React, { Component } from 'react'
import './LoginForm.css'
import { Link, withRouter } from 'react-router-dom'

class LoginForm extends Component {
    static defaultProps = {
        users: []
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {email, password} = e.target

        const user = this.props.users.find(user => user.email === email.value)

        if(!user || !user.password || user.password !== password.value) {
            alert('Incorrect email or password')
            return
        }

        window.sessionStorage.setItem('user_id', user.id)
        this.props.history.push('/shopping-list')
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
                <button className="loginutton" type="submit">Submit</button>
                <p><Link to="/signup">I don't have an account yet</Link></p>
            </form>
        )
    }
}

export default withRouter(LoginForm)

