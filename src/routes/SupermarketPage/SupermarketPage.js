import React, { Component } from 'react'
import SupermarketForm from '../../components/SupermarketForm/SuperMarketForm'
import './SupermarketPage.css'

class SupermarketPage extends Component {
    render() {
        return(
            <section>
                <h2>Pick your favorite supermarket:</h2>
                <SupermarketForm />
            </section>
        )
    }
}

export default SupermarketPage