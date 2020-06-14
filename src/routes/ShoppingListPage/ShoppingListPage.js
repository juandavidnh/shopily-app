import React, { Component } from 'react'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import SubNav from '../../components/SubNav/SubNav'
import ErrorBoundary from '../../errorHandling/ErrorBoundary'
import AddItemButton from '../../components/ShoppingList/AddItemButton/AddItemButton'
import './ShoppingListPage.css'

class ShoppingListPage extends Component {
    static defaultProps = {
        shopping_list: [],
        checkoff: () => {}
    }

    render() {
        return(
            <section>
                <SubNav />
                <ErrorBoundary>
                        { (this.props.shopping_list === undefined || this.props.shopping_list.length < 1) 
                        ? <> 
                            {/*if no tasks are found render message asking user to add first task*/}
                            <h3 className="addFirstItem">Congratulations! Now, add your first item</h3> 
                            <AddItemButton /> 
                        </> 
                        : <ShoppingList items={this.props.shopping_list} checkoff={this.props.checkoff}/>      
                    }
                    
                </ErrorBoundary>
            </section>
        )
    }
}

export default ShoppingListPage