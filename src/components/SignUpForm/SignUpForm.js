import React, { Component } from 'react'
import ValidationError from '../../errorHandling/ValidationError'
import { withRouter, Link } from 'react-router-dom'
import './SignUpForm.css'

class SignUpForm extends Component {
    //set state for live field validation
    state = {
        firstName: {
            value: "",
            touched: false
        },
        lastName: {
            value: "",
            touched: false
        },
        email: {
            value: "",
            touched: false
        },
        
        password: {
            value: "",
            touched: false
        },
        repeatPassword: {
            value: "",
            touched: false
        }
    }

    static defaultProps = {
        signUp: () => {},   
    }

    //group of functions that will update state as user fills in form
    updateFirstName(firstName){
        this.setState({ firstName: { value: firstName, touched: true } })
    }

    updateLastName(lastName){
        this.setState({ lastName: { value: lastName, touched: true } })
    }

    updateEmail(email){
        this.setState({ email: { value: email, touched: true } })
    }

    updatePassword(password){
        this.setState({ password: { value: password, touched: true } })
    }

    updateRepeatPassword(repeatPassword){
        this.setState({ repeatPassword: { value: repeatPassword, touched: true } })
    }

    //extract values from form fields and pass them down to signUpFunction
    handleSubmit = ev => {
            ev.preventDefault()

            const { email, password, firstName, lastName } = this.state
            const emailVal = email.value
            const passwordVal = password.value
            const firstNameVal = firstName.value
            const lastNameVal = lastName.value
          
            this.props.signUp(firstNameVal, lastNameVal, emailVal, passwordVal)
    }

    //validation functions
    validateFirstName() {
        const firstName = this.state.firstName.value.trim();
        if(firstName.length === 0) {
            return "First name is required"
        } 
    }

    validateLastName() {
        const lastName = this.state.lastName.value.trim();
        if(lastName.length === 0) {
            return "Last name is required"
        } 
    }

    validateEmail() {
        const email = this.state.email.value.trim();
        if(email.length === 0) {
            return "Email is required"
        } else if (!email.match(/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
            return "Must be a valid email"
        }
    }

    validatePassword() {
        const password = this.state.password.value.trim()
        if(password.length === 0) {
            return "Password is required"
        } else if (password.length < 8 || password.length > 72) {
            return "Password must be between 8 and 72 characters long"
        } else if (!password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])[\S]+/)) {
            return "Password must contain at least one lowercase letter, one uppercase letter, and one number"
        }
    }

    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        if (repeatPassword !== password) {
          return "Passwords do not match";
        }
    }

    render() {
        const firstNameError = this.validateFirstName()
        const lastNameError = this.validateLastName()
        const emailError = this.validateEmail()
        const passwordError = this.validatePassword()
        const repeatPasswordError = this.validateRepeatPassword() 

        return(
            <form
                onSubmit = {this.handleSubmit}
                className = "signUpForm"
            >
                    <div className="inputField">
                        <label htmlFor="firstName">First Name*</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            id="first-name" 
                            onChange={e => this.updateFirstName(e.target.value)}
                            required />
                    </div>
                    {this.state.firstName.touched && <ValidationError message={firstNameError}/>}
                    <div className="inputField">
                        <label htmlFor="lastName">Last Name*</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            id="last-name"
                            onChange={e => this.updateLastName(e.target.value)}
                            required />
                    </div>
                    {this.state.lastName.touched && <ValidationError message={lastNameError}/>}
                    <div className="inputField">
                        <label htmlFor="email">Email*</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={e => this.updateEmail(e.target.value)}
                            required />
                    </div>
                    {this.state.email.touched && <ValidationError message={emailError}/>}
                    <div className="inputField">
                        <label htmlFor="password">Password*</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={e => this.updatePassword(e.target.value)} 
                            required />
                    </div>
                    {this.state.password.touched && <ValidationError message={passwordError}/>}
                    <div className="inputField">
                        <label htmlFor="repeatPassword">Repeat password*</label>
                        <input 
                            type="password" 
                            name="repeatPassword" 
                            id="repeat-password" 
                            onChange={e => this.updateRepeatPassword(e.target.value)} 
                            required />
                    </div>
                    {this.state.repeatPassword.touched && <ValidationError message={repeatPasswordError}/>}
                <button 
                    type="submit"
                    disabled={this.validateFirstName() || this.validateLastName() || this.validatePassword() || this.validateEmail() || this.validateRepeatPassword()}
                >Next</button>
                <p><Link className="haveAccount" to="/login">I have an account already</Link></p>
            </form>
        )
    }
}

export default withRouter(SignUpForm)