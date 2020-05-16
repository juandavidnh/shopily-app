import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddItemButton.css'

class AddItemButton extends Component {
    render() {
        return(
            <section className = "add-item">
                <p><Link to="/add-item">Add</Link></p>
            </section>
        )
    }
}

export default AddItemButton