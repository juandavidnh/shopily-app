import React, { Component } from 'react'
import UserApiService from '../../../services/user-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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
        //get logged in user unfo in order to update its shopping list
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
        
        //pass user id and item id in order to delete user's specific shopping list item from db
        this.props.checkoff(this.state.user.id, this.props.item.id)
    }

    render() {
        return(
            <div id={"shopping-item-"+this.props.item_id} className={this.state.check ? "shopping-item hidden" : "shopping-item"}>
                <h3 className={"task-name " + this.props.item.status}>{this.props.item.product_name}</h3>
                <p className="item-location">Aisle {this.props.item.aisle}</p>
                <button className="check-off" type="button" onClick={this.checkOffItem}><FontAwesomeIcon icon={faCheck} /></button>
            </div>
        )
    }
}

export default ItemRow