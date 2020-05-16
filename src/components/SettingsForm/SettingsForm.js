import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './SettingsForm.css'

class SettingsForm extends Component {
    render() {
        return(
            <form
                className="settings-form"
            >
                <label htmlFor="city">City:</label>
                <select id="city" name="city">
                    <option value="quito">Quito</option>
                </select><br /><br />
                <label htmlFor="supermarket">Supermarket:</label>
                <select id="city" name="city">
                    <option value="mega-6-diciembre">Megamaxi (6 de Diciembre)</option>
                </select><br /><br />
                <p className="button"><Link to="shopping-list.html">Next</Link></p>
            </form>
        )
    }
}

export default withRouter(SettingsForm)