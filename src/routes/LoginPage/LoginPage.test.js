import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LoginPage from './LoginPage'
import STORE from '../../dummy-store'

it('LoginPage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <LoginPage users={STORE.users} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})