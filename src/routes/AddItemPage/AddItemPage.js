import React, { Component } from 'react'
import AddItemForm from '../../components/AddItemForm/AddItemForm'
import './AddItemPage.css'

class AddItemPage extends Component {
    render() {
        return(
            <section>
                <h2>Add Item</h2>
                <AddItemForm />
            </section>
        )
    }
}

export default AddItemPage