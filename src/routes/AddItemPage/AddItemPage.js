import React, { Component } from 'react'
import AddItemForm from '../../components/AddItemForm/AddItemForm'
import './AddItemPage.css'

class AddItemPage extends Component {
    static defaultProps = {
        supermarket_id: 0,
        user_id: 0,
        item_list: [],
        shopping_list: [],
        addItem: () => {}
    }

    render() {
        const filteredItemList = this.props.item_list.filter(item => parseInt(item.supermarket_id) === parseInt(this.props.supermarket_id))
        const shoppingItems = this.props.shopping_list

        let shoppingItemCode = []
        let filteredItems = []

        for(let i = 0; i < shoppingItems.length; i++) {
            shoppingItemCode.push(shoppingItems[i].code)
        }

        for(let i = 0; i < filteredItemList.length; i++){
            if(!shoppingItemCode.includes(filteredItemList[i].code)){
                filteredItems.push(filteredItemList[i])
            } else {
                continue
            }
        }
        
        return(
            <section>
                <h2>Add Item</h2>
                <AddItemForm items={filteredItems} userId={this.props.user_id} addItem={this.props.addItem}/>
            </section>
        )
    }
}

export default AddItemPage