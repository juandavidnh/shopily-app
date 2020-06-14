import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SuperMarketForm from './SuperMarketForm'
import STORE from '../../dummy-store'

it('SuperMarketForm renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <SuperMarketForm supermarkets={STORE.supermarkets} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})