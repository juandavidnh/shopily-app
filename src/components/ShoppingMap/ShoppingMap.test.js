import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ShoppingMap from './ShoppingMap'
import STORE from '../../dummy-store'

it('SubNav renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <ShoppingMap personalList={STORE.item_list} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})