import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddItemForm from './AddItemForm'
import STORE from '../../dummy-store'

it('AddItemForm renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <AddItemForm items={STORE.item_list} userId={1} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})