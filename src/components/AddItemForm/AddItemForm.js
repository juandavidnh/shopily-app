import React, { Component } from 'react'
import ShoppingListApiService from '../../services/shopping-list-service'
import { withRouter } from 'react-router-dom'
import './AddItemForm.css'

class AddItemForm extends Component {
    static defaultProps = {
        addItem: () => {},
        items: [],
        userId: 0,
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let { shopping_item } = e.target
        const itemId = shopping_item.value

        // /api/shopping-list will be called in order to add a new item to the user's shopping list within db
        ShoppingListApiService.addItem(this.props.userId, itemId)
            .then(item => {
                this.props.addItem(item)
                this.props.history.push('/shopping-list')
            })
            .catch(res => alert(res.error))        
    }

    render() {
        return(
            <form
                className = "addItemForm"
                onSubmit = {this.handleSubmit}
            >
                {/*filtered list will get mapped into the dropdown menu, so that user can pick a new item
                to add to their shopping list */}
                <select id="shopping_item" name="shopping_item">
                    {this.props.items.map((item) =>
                        <option 
                            key={item.id}
                            value={item.id} 
                        >{item.product_name}</option>)}
                </select>
                <button className="add-item-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(AddItemForm)