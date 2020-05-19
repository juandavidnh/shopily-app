import React, { Component } from 'react'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import SubNav from '../../components/SubNav/SubNav'
import './ShoppingListPage.css'

class ShoppingListPage extends Component {
    static defaultProps = {
        users: [],
        supermarkets: [],
        item_list: [],
        
    }

    render() {
        const userId = window.sessionStorage.getItem('user_id')
        const user = this.props.users.find(user => parseInt(user.id) === parseInt(userId))
        const supermarket = this.props.supermarkets.find(supermarket => parseInt(supermarket.id) === parseInt(user.supermarket_id))
        const items = this.props.item_list.filter(item => parseInt(item.supermarket_id) === parseInt(supermarket.id))

        return(
            <section>
                <SubNav />
                <ShoppingList items={items}/>
            </section>
        )
    }
}

export default ShoppingListPage