import React, { Component } from 'react'
import ShoppingMap from '../../components/ShoppingMap/ShoppingMap'
import SubNav from '../../components/SubNav/SubNav'
import './ShoppingRoutePage.css'

class ShoppingRoutePage extends Component {
    render() {
        return(
            <section>
                <SubNav />
                <ShoppingMap />
            </section>
        )
    }
}

export default ShoppingRoutePage