import React, { Component } from 'react'
import UserApiService from '../../../services/user-api-service'
import './ItemRow.css'

class ItemRow extends Component {
    state = {
        user: {}
    }

    static defaultProps = {
        item: {},
        checkoff: () => {}
    }

    componentDidMount() {
        UserApiService.getOwnUser()
            .then(user => {
                this.setState({
                    user: user
                })
            })
            .catch(res => alert(res.error))
    }

    checkOffItem = (e) => {
        e.preventDefault()
        
        this.props.checkoff(this.state.user.id, this.props.item.id)
    }

    render() {
        return(
            <div id={"shopping-item-"+this.props.item_id} className={this.state.check ? "shopping-item hidden" : "shopping-item"}>
                <h3 className={"task-name " + this.props.item.status}>{this.props.item.product_name}</h3>
                <p className="item-location">Aisle {this.props.item.aisle}</p>
                <button className="check-off" type="button" onClick={this.checkOffItem}>Check</button>
            </div>
        )
    }
}

export default ItemRow