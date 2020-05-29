import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    static defaultProps = {
        isLoggedIn: false
    }

    renderLogoutLink() {
        return(
            <ul className="mainNavControl">
                <li className="nav-item"><Link to='/settings'>Settings</Link></li>
                <li className="nav-item"><Link to='/'>Log Out</Link></li>
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
                    {this.props.isLoggedIn
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                </nav>
            </header>
        )
    }
}

export default Nav
