import React, { Component } from 'react'
import { Link } from'react-router-dom'
import './SubNav.css'

class SubNav extends Component {
    render() {
        return(
            <nav className = "subNav">
                <ul>
                    <li><Link className={this.props.path==='/shopping-list'
                                ? "bold"
                                : null} to="/shopping-list">List</Link></li>
                    <li><Link className={this.props.path==='/shopping-route'
                                ? "bold"
                                : null} to="/shopping-route">Route</Link></li>
                </ul>
            </nav>
        )
    }
}

export default SubNav