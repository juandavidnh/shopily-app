import React, { Component } from 'react'
import AddItemForm from '../../components/AddItemForm/AddItemForm'
import './AddItemPage.css'

class AddItemPage extends Component {
    static defaultProps = {
        users: [],
        item_list: [],
        shopping_list: [],
        supermarkets: [],
        addItem: () => {}
    }

    render() {
        const userId = window.sessionStorage.getItem('userId')
        const user = this.props.users.find(user => parseInt(user.id) === parseInt(userId))
        const shoppingList = this.props.shopping_list.find(list => parseInt(list.user_id) === parseInt(user.id) && parseInt(list.supermarket_id) === parseInt(user.supermarket_id))
        const shoppingItems = shoppingList.list

        let shoppingItemCode = []
        let filteredItems = []

        for(let i = 0; i < shoppingItems.length; i++) {
            shoppingItemCode.push(shoppingItems[i].code)
        }

        for(let i = 0; i < this.props.item_list.length; i++){
            if(!shoppingItemCode.includes(this.props.item_list[i].code)){
                filteredItems.push(this.props.item_list[i])
            } else {
                continue
            }
        }
        
        return(
            <section>
                <h2>Add Item</h2>
                <AddItemForm items={filteredItems} addItem={this.props.addItem}/>
            </section>
        )
    }
}

export default AddItemPage