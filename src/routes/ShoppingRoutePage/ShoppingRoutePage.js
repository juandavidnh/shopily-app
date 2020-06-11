import React, { Component } from 'react'
import ShoppingMap from '../../components/ShoppingMap/ShoppingMap'
import SubNav from '../../components/SubNav/SubNav'
import './ShoppingRoutePage.css'

class ShoppingRoutePage extends Component {
    static defaultProps = {
        shopping_list: []
    }


    render() {
        return(
            <section>
                <SubNav />
                <ShoppingMap personalList = {this.props.shopping_list.sort((a, b) => a.aisle - b.aisle)} />
            </section>
        )
    }
}

export default ShoppingRoutePage