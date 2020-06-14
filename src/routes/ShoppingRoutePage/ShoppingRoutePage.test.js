import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShoppingRoutePage from './ShoppingRoutePage'
import STORE from '../../dummy-store'

it('ShoppingRoutePage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <ShoppingRoutePage shopping_list={STORE.item_list} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})