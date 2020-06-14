import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddItemPage from './AddItemPage'
import STORE from '../../dummy-store'

it('AddItemPage renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(
        <BrowserRouter>
            <AddItemPage user_id={1} supermarket_id={1} item_list={STORE.item_list} />
        </BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})