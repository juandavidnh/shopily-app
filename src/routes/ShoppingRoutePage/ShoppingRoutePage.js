import React, { Component } from 'react'
import ShoppingMap from '../../components/ShoppingMap/ShoppingMap'
import SubNav from '../../components/SubNav/SubNav'
import './ShoppingRoutePage.css'

class ShoppingRoutePage extends Component {
    static defaultProps = {
        shopping_list: []
    }

    state = {
        personalList: []
    }

    UNSAFE_componentWillMount () {
        const myList = this.props.shopping_list.find(list => parseInt(list.user_id) === parseInt(window.sessionStorage.getItem("userId")))

        if(myList.list !== undefined && myList.list.length > 0){
            myList.list.sort(function(a, b) {
                return a.aisle - b.aisle
            })
        }

        this.setState({
            personalList: myList.list
        })
    }

    render() {
        return(
            <section>
                <SubNav />
                <ShoppingMap personalList = {this.state.personalList} />
            </section>
        )
    }
}

export default ShoppingRoutePage