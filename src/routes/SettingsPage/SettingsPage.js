import React, { Component } from 'react'
import SettingsForm from '../../components/SettingsForm/SettingsForm'
import './SettingsPage.css'

class SettingsPage extends Component {
    render() {
        return(
            <section>
                <h2>Settings</h2>
                <SettingsForm />
            </section>
        )
    }
}

export default SettingsPage