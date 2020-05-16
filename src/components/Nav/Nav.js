import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    state = {
        isLoggedIn: false
    }

    renderLogoutLink() {
        return(
            <ul>
                <li className="nav-item"><Link to='/settings'>Settings</Link></li>
                <li className="nav-item"><Link to='/'>Log Out</Link></li>
            </ul>
        )
    }

    renderLoginLink() {
        return(
            <ul>
                <li className="nav-item"><Link to='/signup'>Sign up</Link></li>
                <li className="nav-item"><Link to='/login'>Sign in</Link></li>
            </ul>
        )
    }

    render() {
        return(
            <header>
                <Link to='/'>Shopily</Link>
                <nav>
                    {this.state.isLoggedIn
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                </nav>
            </header>
        )
    }
}

export default Nav
