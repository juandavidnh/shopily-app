import React, { Component } from 'react'
import SupermarketForm from '../../components/SupermarketForm/SuperMarketForm'
import './SupermarketPage.css'

class SupermarketPage extends Component {
    static defaultProps = {
        supermarkets: [],
        pickSupermarket: () => {}
    }

    render() {
        return(
            <section className="superMarketPage">
                <h2>Pick your favorite supermarket:</h2>
                <SupermarketForm supermarkets={this.props.supermarkets} pickSupermarket={this.props.pickSupermarket}/>
            </section>
        )
    }
}

export default SupermarketPage