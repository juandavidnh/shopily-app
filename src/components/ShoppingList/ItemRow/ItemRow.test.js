import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ItemRow from './ItemRow'
import STORE from '../../../dummy-store'

it('AddItemForm renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <ItemRow item={STORE.item_list[0]} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})