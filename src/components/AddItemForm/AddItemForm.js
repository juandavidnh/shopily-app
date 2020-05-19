import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AddItemForm.css'

class AddItemForm extends Component {
    static defaultProps = {
        addItem: () => {},
        items: []
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let { shopping_item } = e.target

        this.props.addItem(shopping_item.value)
        this.props.history.push('/shopping-list')
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
                        >{item.product_name}</option>)}
                </select>
                <button className="add-item-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(AddItemForm)