import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SettingsPage from './SettingsPage'
import STORE from '../../dummy-store'

it('SettingsPage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SettingsPage supermarkets={STORE.supermarkets} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})