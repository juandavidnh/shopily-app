import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SettingsForm from './SettingsForm'
import STORE from '../../dummy-store'

it('SettingsForm renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SettingsForm supermarkets={STORE.supermarkets} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})