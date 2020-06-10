import React, { Component } from 'react'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import SubNav from '../../components/SubNav/SubNav'
import ErrorBoundary from '../../errorHandling/ErrorBoundary'
import AddItemButton from '../../components/ShoppingList/AddItemButton/AddItemButton'
import ShoppingListApiService from '../../services/shopping-list-service'
import UserApiService from '../../services/user-api-service'
import './ShoppingListPage.css'

class ShoppingListPage extends Component {
    static defaultProps = {
        users: [],
        supermarkets: [],
        item_list: [],
        shopping_list: [],
    }

    state = {
        items: []
    }

    componentDidMount() {
        UserApiService.getOwnUser()
            .then(user => {
                ShoppingListApiService.getItems(user.id)
                    .then(items => {
                        this.setState({
                            items: items
                        })
                    })
            })
            .catch(res => alert(res.error))
    }

    checkOff = (userId, itemId) => {
        const itemsArray = this.state.items
        console.log(itemsArray)
        const selectItem = itemsArray.find(item => parseInt(item.id) === parseInt(itemId))
        const indexOfItem = itemsArray.indexOf(selectItem)

        itemsArray.splice(indexOfItem, 1)

        this.setState({
            items: itemsArray
        })

        ShoppingListApiService.deleteItem(userId, itemId)
            .catch(res => alert(res.error))
    }

    addItem

    render() {
        return(
            <section>
                <SubNav />
                <ErrorBoundary>
                        { (this.state.items === undefined || this.state.items.length < 1) 
                        ? <> 
                            {/*if no tasks are found render message asking user to add first task*/}
                            <h3 className="addFirstItem">Congratulations! Now, add your first item</h3> 
                            <AddItemButton /> 
                        </> 
                        : <ShoppingList items={this.state.items} checkoff={this.checkOff}/>      
                    }
                    
                </ErrorBoundary>
            </section>
        )
    }
}

export default ShoppingListPage