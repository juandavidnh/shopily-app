import React, { Component } from 'react'
import SettingsForm from '../../components/SettingsForm/SettingsForm'
import './SettingsPage.css'

class SettingsPage extends Component {
    static defaultProps = {
        supermarkets: [],
        pickSupermarket: () => {}
    }

    render() {
        return(
            <section className="settingsPage">
                <h2 className="settingsPageTitle">Settings</h2>
                <SettingsForm supermarkets={this.props.supermarkets} pickSupermarket={this.props.pickSupermarket}/>
            </section>
        )
    }
}

export default SettingsPage