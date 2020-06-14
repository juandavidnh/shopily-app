import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SupermarketPage from './SupermarketPage'
import STORE from '../../dummy-store'

it('SupermarketPage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SupermarketPage supermarkets={STORE.supermarkets} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})