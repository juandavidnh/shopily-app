import React, { Component } from 'react'
import './ItemRow.css'

class ItemRow extends Component {
    static defaultProps = {
        item: {}
    }

    render() {
        return(
            <div className="shopping-item">
                <h3 className="task-name">{this.props.item.product_name}</h3>
                <p className="item-location">{this.props.item.aisle}</p>
            </div>
        )
    }
}

export default ItemRow