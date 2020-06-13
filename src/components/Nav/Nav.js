import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import shopilyLogo from '../../media/shopily-logo.png'
import './Nav.css'

class Nav extends Component {
    static defaultProps = {
        logout: () => {}
    }

    logout = () => {
        this.props.logout()
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return(
            <ul className="mainNavControl">
                <li className="nav-item"><Link to='/settings'>settings</Link></li>
                <li className="nav-item"><Link onClick={this.logout} to='/'>log out</Link></li>
            </ul>
        )
    }

    renderLoginLink() {
        return(
            <ul className="mainNavControl">
                <li className="nav-item"><Link to='/signup'>sign up</Link></li>
                <li className="nav-item"><Link to='/login'>sign in</Link></li>
            </ul>
        )
    }

    render() {
        return(
            <header className = "mainNav">
                <Link className = "title" to='/'><img src={shopilyLogo} alt="shopily-logo" className="shopily-logo"/></Link>
                <nav>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                </nav>
            </header>
        )
    }
}

export default Nav
