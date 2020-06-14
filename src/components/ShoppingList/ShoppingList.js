import React, { Component } from 'react'
import ItemRow from './ItemRow/ItemRow'
import AddItemButton from './AddItemButton/AddItemButton'
import './ShoppingList.css'

class ShoppingList extends Component {
    static defaultProps = {
        items: [],
        checkoff: () => {}
    }

    render() {
        //render each shopping list item into individual rows 
        const shoppingList = this.props.items.map((item, index) => 
            <ItemRow 
                key={index} 
                item={item}
                item_id={index}
                checkoff={this.props.checkoff}
            />
        )

        return(
            <section className= "shopping-list">
                <section className= "shopping-items">
                    {shoppingList}
                </section>
                <AddItemButton />
            </section>
        )
    }
}

export default ShoppingList