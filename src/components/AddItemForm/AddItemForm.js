import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AddItemForm.css'

class AddItemForm extends Component {
    static defaultProps = {
        items: []
    }

    render() {
        return(
            <form
                className = "add-item-form"
            >
                <label htmlFor="shopping-item">Add item:</label>
                <select id="shopping-item" name="shopping-item">
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