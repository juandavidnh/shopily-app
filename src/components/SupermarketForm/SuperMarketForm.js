import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './SuperMarketForm.css'

class SuperMarketForm extends Component {
    static defaultProps = {
        supermarkets: [],
        pickSupermarket: () => {}
    }

    state = {
        supermarket: {
            value: "",
            touched: false
        },
        city: {
            value: "",
            touched: false
        }
    }

    updateSupermarket(supermarket){
        this.setState({ supermarket: { value: supermarket, touched: true } })
    }

    updateCity(city){
        this.setState({ city: { value: city, touched: true } })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const city = e.target.city.value
        const supermarket = e.target.supermarket.value
        const supermarketArrF = this.props.supermarkets.find(supermarketF => supermarketF.supermarket_name === supermarket)
        const supermarketId = supermarketArrF.id

        this.props.pickSupermarket(city, supermarketId)
        this.props.history.push('/shopping-list')
    }

    render() {

        return(
            <form
                className="superMarketForm"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="city">City:</label>
                <select 
                    id="city" 
                    name="city"
                    defaultValue=""
                    onChange={e => this.updateCity(e.target.value)}
                >
                    <option value="" disabled>Choose a city</option>
                    {this.props.supermarkets.map((supermarket, index) => 
                        <option key={index} value={supermarket.supermarket_city}>{supermarket.supermarket_city}</option>    
                    )}
                </select><br /><br />
                <label htmlFor="supermarket">Supermarket:</label>
                <select 
                    id="supermarket" 
                    name="supermarket"
                    defaultValue=""
                    onChange={e => this.updateSupermarket(e.target.value)}
                >
                    <option value="" disabled>Choose a supermarket</option>
                    {this.props.supermarkets.map((supermarket, index) => 
                        this.state.city.touched && supermarket.supermarket_city === this.state.city.value 
                            ? <option key={index} value={supermarket.supermarket_name}>{supermarket.supermarket_name}</option> 
                            : null   
                    )}
                </select><br /><br />
                <button type="submit">Next</button>
            </form>
        )
    }
}

export default withRouter(SuperMarketForm)