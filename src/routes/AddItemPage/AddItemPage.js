import React, { Component } from 'react'
import AddItemForm from '../../components/AddItemForm/AddItemForm'
import ShoppingListApiService from '../../services/shopping-list-service'
import UserApiService from '../../services/user-api-service'
import ItemsApiService from '../../services/items-api-service'
import './AddItemPage.css'

class AddItemPage extends Component {
    static defaultProps = {
        users: [],
        item_list: [],
        shopping_list: [],
        supermarkets: [],
        addItem: () => {}
    }

    state = {
        shopping_list: [],
        item_list: [],
        supermarket_id: 0,
        user_id: 0
    }

    componentDidMount() {
        UserApiService.getOwnUser()
            .then(user => {
                const supermarketId = user.supermarket_id
                const userId = user.id
                console.log(userId)

                ShoppingListApiService.getItems(user.id)
                    .then(items => {
                        this.setState({
                            shopping_list: items,
                            supermarket_id: supermarketId,
                            user_id: userId
                        })
                    })
            })
            .catch(res => alert(res.error))

        ItemsApiService.getItems()
            .then(items => {
                this.setState({
                    item_list: items
                })
            })
            .catch(res => alert(res.error))
    }

    render() {
        const filteredItemList = this.state.item_list.filter(item => parseInt(item.supermarket_id) === parseInt(this.state.supermarket_id))
        const shoppingItems = this.state.shopping_list

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
                <AddItemForm items={filteredItems} userId={this.state.user_id}/>
            </section>
        )
    }
}

export default AddItemPage