import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShoppingList from './ShoppingList'
import STORE from '../../dummy-store'

it('ShoppingList renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <ShoppingList items={STORE.item_list} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})