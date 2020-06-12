import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
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
                <li className="nav-item"><Link to='/settings'>Settings</Link></li>
                <li className="nav-item"><Link onClick={this.logout} to='/'>Log Out</Link></li>
            </ul>
        )
    }

    renderLoginLink() {
        return(
            <ul className="mainNavControl">
                <li className="nav-item"><Link to='/signup'>Sign up</Link></li>
                <li className="nav-item"><Link to='/login'>Sign in</Link></li>
            </ul>
        )
    }

    render() {
        return(
            <header className = "mainNav">
                <Link className = "title" to='/'>Shopily</Link>
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
