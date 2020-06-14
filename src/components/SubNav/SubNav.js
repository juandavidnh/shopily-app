import React, { Component } from 'react'
import { Link } from'react-router-dom'
import './SubNav.css'

class SubNav extends Component {
    //SubNav allows user to navigate between shopping list and shopping map
    render() {
        return(
            <nav className = "subNav">
                <ul>
                    <li><Link className={this.props.path==='/shopping-list'
                                ? "bold"
                                : null} to="/shopping-list">list</Link></li>
                    <li><Link className={this.props.path==='/shopping-route'
                                ? "bold"
                                : null} to="/shopping-route">route</Link></li>
                </ul>
            </nav>
        )
    }
}

export default SubNav