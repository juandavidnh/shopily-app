import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddItemButton from './AddItemButton'

it('ItemRow renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <AddItemButton />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})