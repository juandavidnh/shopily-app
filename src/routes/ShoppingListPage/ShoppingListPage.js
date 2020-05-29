import React, { Component } from 'react'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import SubNav from '../../components/SubNav/SubNav'
import ErrorBoundary from '../../errorHandling/ErrorBoundary'
import AddItemButton from '../../components/ShoppingList/AddItemButton/AddItemButton'
import './ShoppingListPage.css'

class ShoppingListPage extends Component {
    static defaultProps = {
        users: [],
        supermarkets: [],
        item_list: [],
        shopping_list: [],
        checkoff: () => {}
    }

    state = {
        items: []
    }

    componentDidMount() {
        let userId = window.sessionStorage.getItem('userId')
        let supermarketId = window.sessionStorage.getItem('supermarketId')
        let user = this.props.users.find(user => parseInt(user.id) === parseInt(userId))
        let supermarket = this.props.supermarkets.find(supermarket => parseInt(supermarket.id) === parseInt(supermarketId))
        let shoppingList = this.props.shopping_list.find(list => parseInt(list.user_id) === parseInt(user.id) && parseInt(list.supermarket_id) === parseInt(supermarket.id) )
        let items = shoppingList.list
        if(items !== undefined || items.length > 0){
            items.sort(function(a, b) {
                return a.aisle - b.aisle
            })
        }
        
        if(items !== undefined){
            this.setState({
                items: items
            })
        }
        
    }

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
                        : <ShoppingList items={this.state.items} checkoff={this.props.checkoff}/>      
                    }
                    
                </ErrorBoundary>
            </section>
        )
    }
}

export default ShoppingListPage