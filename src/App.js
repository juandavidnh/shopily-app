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
    item_list: [],
    shopping_list: [],
    isLoggedIn: false,
  }

  componentDidMount() {
    this.setState({
      supermarkets: STORE.supermarkets,
      users: STORE.users,
      item_list: STORE.item_list,
      shopping_list: STORE.shopping_list
    })                
  }

  signUp = (user) => {
    const users = this.state.users
    const id = users.length + 1
    const date_created = new Date()

    const newUser = {
      id: id,
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      date_created: date_created
    }

    users.push(newUser)

    window.sessionStorage.setItem("userId", id)

    this.setState({
      users: users,
      isLoggedIn: true
    })
  }

  pickSupermarket = (city, supermarket_id) => {  
    let userId = window.sessionStorage.getItem("userId")
    const usersArray = this.state.users
    const user = usersArray.find(user => parseInt(user.id) === parseInt(userId))
    const userIndex = usersArray.indexOf(user)

    const updatedUser = {
      id: user.id,
      email: user.email,
      password: user.password,
      first_name: user.first_name,
      last_name: user.last_name,
      city: city,
      supermarket_id: supermarket_id,
      date_created: user.date_created
    }

    usersArray.splice(userIndex, 1, updatedUser)

    const shoppingList = this.state.shopping_list
    shoppingList.push({
      user_id: userId,
      supermarket_id: supermarket_id,
      list: []
    })

    window.sessionStorage.setItem("supermarketId", supermarket_id)

    this.setState({
      users: usersArray,
      shopping_list: shoppingList
    })

  }

  login = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  addItem = (item) => {
    const itemDetailed = this.state.item_list.find(i => i.product_name === item)
    const userId = window.sessionStorage.getItem("userId")

    const shoppingListArr = this.state.shopping_list
    const listDetailed = shoppingListArr.find(list => parseInt(list.user_id) === parseInt(userId))
    const listIndex = shoppingListArr.indexOf(listDetailed)
    const list = listDetailed.list

    itemDetailed.date_created = new Date()

    list.push(itemDetailed)

    listDetailed.list = list

    shoppingListArr.splice(listIndex, 1, listDetailed)
    
    this.setState({
      shopping_list: shoppingListArr
    })
  }

  checkoff = (item) => {
    const shoppingListArr = this.state.shopping_list
    const userId = window.sessionStorage.getItem("userId")

    const shoppingList = this.state.shopping_list.find(list => parseInt(list.user_id) === parseInt(userId))

    const shoppingListIndex = shoppingListArr.indexOf(shoppingList)

    const itemDetailed = shoppingList.list.find(i => i.product_name === item)
    

    const itemIndex = shoppingList.list.indexOf(itemDetailed)

    shoppingList.list.splice(itemIndex, 1)

    shoppingListArr.splice(shoppingListIndex, 1, shoppingList)

    this.setState({
      shopping_list: shoppingListArr
    })


  }


  render() {
    return(
    <div className="App">
      <Nav isLoggedIn={this.state.isLoggedIn}/>
      
      <main className="App_main">
        <Switch>
          <Route
            exact
            path={'/'}
            component={(props) =>
              <LandingPage 
                {...props}
                isLoggedIn = {this.state.isLoggedIn}
              />}
          />
          <Route
            path={'/login'}
            component={(props) =>
              <LoginPage 
                {...props}
                users = {this.state.users}
                login = {this.login}
              />}
          />
          <Route
            path={'/signup'}
            component={(props) =>
              <SignUpPage 
                {...props}
                users = {this.state.users}
                signup = {this.signUp}
              />}
          />
          <Route
            path={'/pick-supermarket'}
            component={(props) =>
              <SupermarketPage 
                {...props}
                supermarkets = {this.state.supermarkets}
                pickSupermarket = {this.pickSupermarket}
              />}
          />
          {(this.state.supermarkets.length > 0 && this.state.users.length > 0 && this.state.shopping_list.length > 0 && this.state.item_list.length > 0) ?
          <Route
            path={'/shopping-list'}
            component={(props) =>
              <ShoppingListPage 
                {...props}
                users = {this.state.users}
                supermarkets = {this.state.supermarkets}
                item_list = {this.state.item_list}
                shopping_list = {this.state.shopping_list}
                checkoff = {this.checkoff}
              />}
          /> 
          :
          <>Loading...</>
          }
          <Route
            path={'/shopping-route'}
            component={(props) =>
              <ShoppingRoutePage 
                {...props}
                shopping_list = {this.state.shopping_list}
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
                shopping_list = {this.state.shopping_list}
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