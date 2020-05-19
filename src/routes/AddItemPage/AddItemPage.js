import React, { Component } from 'react'
import AddItemForm from '../../components/AddItemForm/AddItemForm'
import './AddItemPage.css'

class AddItemPage extends Component {
    static defaultProps = {
        item_list: [],
        addItem: () => {}
    }

    render() {
        return(
            <section>
                <h2>Add Item</h2>
                <AddItemForm items={this.props.item_list} />
            </section>
        )
    }
}

export default AddItemPage