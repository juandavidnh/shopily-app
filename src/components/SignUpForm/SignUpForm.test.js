import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SignUpForm from './SignUpForm'

it('AddItemForm renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SignUpForm />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})