import React, { Component } from 'react'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import SubNav from '../../components/SubNav/SubNav'
import './ShoppingListPage.css'

class ShoppingListPage extends Component {
    render() {
        return(
            <section>
                <SubNav />ß
                <ShoppingList />
            </section>
        )
    }
}

export default ShoppingListPage