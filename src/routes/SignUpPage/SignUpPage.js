import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import './SignUpPage.css'

class SignUpPage extends Component {
    static defaultProps = {
        signup: () => {}
    }

    render() {
        return(
            <section className="signUpPage">
                <h2 className="signUpTitle">Sign Up</h2>
                <SignUpForm signUp={this.props.signup} />
            </section>
        )
    }
}

export default SignUpPage