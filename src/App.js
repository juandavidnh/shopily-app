import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import AddItemPage from './routes/AddItemPage/AddItemPage'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import SettingsPage from './routes/SettingsPage/SettingsPage'
import ShoppingListPage from './routes/ShoppingListPage/ShoppingListPage'
import ShoppingRoutePage from './routes/ShoppingRoutePage/ShoppingRoutePage'
import SignUpPage from './routes/SignUpPage/SignUpPage'
import SupermarketPage from './routes/SupermarketPage/SupermarketPage'
import STORE from './dummy-store'
import './App.css'


class App extends React.Component {
  state = {
    supermarkets: [],
    users: [],
    item_list: []
  }

  componentDidMount() {
    this.setState({
      supermarkets: STORE.supermarkets,
      users: STORE.users,
      item_list: STORE.item_list
    })
  }

  addItem = (item) => {
    const item_list = this.state.item_list
    const id = item_list.length + 1
    const code = "MEGA00" + id
    const product_name = item
    const aisle = 1
    const supermarket_id = 1
    const date_created = new Date()

    const newItem = {
      id: id,
      code: code,
      product_name: product_name,
      aisle: aisle,
      supermarket_id: supermarket_id,
      date_created: date_created
    }

    item_list.push(newItem)
    
    this.setState({
      item_list: item_list
    })
  }



  render() {
    return(
    <div className="App">
      <Nav />
      <main className="App_main">
        <Switch>
          <Route
            exact
            path={'/'}
            component={(props) =>
              <LandingPage 
                {...props}
              />}
          />
          <Route
            path={'/login'}
            component={(props) =>
              <LoginPage 
                {...props}
                users = {this.state.users}
              />}
          />
          <Route
            path={'/signup'}
            component={(props) =>
              <SignUpPage 
                {...props}
                users = {this.state.users}
              />}
          />
          <Route
            path={'/pick-supermarket'}
            component={(props) =>
              <SupermarketPage 
                {...props}
                supermarkets = {this.state.supermarkets}
              />}
          />
          <Route
            path={'/shopping-list'}
            component={(props) =>
              <ShoppingListPage 
                {...props}
                users = {this.state.users}
                supermarkets = {this.state.supermarkets}
                item_list = {this.state.item_list}
              />}
          />
          <Route
            path={'/shopping-route'}
            component={(props) =>
              <ShoppingRoutePage 
                {...props}
              />}
          />
          <Route
            path={'/settings'}
            component={(props) =>
              <SettingsPage 
                {...props}
                users = {this.state.users}
                supermarkets = {this.state.supermarkets}
              />}
          />
          <Route
            path={'/add-item'}
            component={(props) =>
              <AddItemPage 
                {...props}
                users = {this.state.users}
                supermarkets = {this.state.supermarkets}
                item_list = {this.state.item_list}
                addItem = {this.addItem}
              />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
    )
  }
}

export default App;