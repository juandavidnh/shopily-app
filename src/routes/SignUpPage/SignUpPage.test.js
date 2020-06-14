import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SignUpPage from './SignUpPage'

it('SignUpPage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})