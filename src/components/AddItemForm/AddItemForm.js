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
                className = "add-item-form"
                onSubmit = {this.handleSubmit}
            >
                <label htmlFor="shopping_item">Add item:</label>
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