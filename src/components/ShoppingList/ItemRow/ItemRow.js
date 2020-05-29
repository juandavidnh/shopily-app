import React, { Component } from 'react'
import './ItemRow.css'

class ItemRow extends Component {
    state = {
        check: false
    }

    static defaultProps = {
        item: {},
        checkoff: () => {}
    }

    checkOffItem = (e) => {
        e.preventDefault()
        
        this.props.checkoff(this.props.item.product_name)
    }

    render() {
        return(
            <div id={"shopping-item-"+this.props.item_id} className={this.state.check ? "shopping-item hidden" : "shopping-item"}>
                <h3 className="task-name">{this.props.item.product_name}</h3>
                <p className="item-location">Aisle {this.props.item.aisle}</p>
                <button className="check-off" type="button" onClick={this.checkOffItem}>Check</button>
            </div>
        )
    }
}

export default ItemRow