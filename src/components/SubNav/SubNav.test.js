import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SubNav from './SubNav'

it('SubNav renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SubNav />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})