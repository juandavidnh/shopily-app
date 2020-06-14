import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShoppingListPage from './ShoppingListPage'
import STORE from '../../dummy-store'

it('ShoppingListPage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <ShoppingListPage users={STORE.users} item_list={STORE.item_list} supermarkets={STORE.supermarkets} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})