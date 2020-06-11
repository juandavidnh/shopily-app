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
import AuthApiService from './services/auth-api-service'
import TokenService from './services/token-service'
import UserApiService from './services/user-api-service'
import ShoppingListApiService from './services/shopping-list-service'
import ItemsApiService from './services/items-api-service'
import { withRouter } from 'react-router'
import './App.css'


class App extends React.Component {
  state = {
    supermarket_id: 0,
    user_id: 0,
    item_list: [],
    shopping_list: [],
    supermarkets: [],
    isLoggedIn: false,
  }

  componentDidMount() {
    const hasToken = TokenService.getAuthToken()

    if(hasToken) {
      UserApiService.getOwnUser()
        .then(user => {
          const supermarketId = user.supermarket_id
          const userId = user.id

          ShoppingListApiService.getItems(user.id)
            .then(items => {
              this.setState({
                shopping_list: items,
                user_id: userId,
                supermarket_id: supermarketId
              })
            })
        })
        .catch(res => alert(res.error))

      ItemsApiService.getItems()
        .then(items => {
            this.setState({
                item_list: items
            })
        })
        .catch(res => alert(res.error))

      ShoppingListApiService.getAllSupermarkets()
        .then(supermarkets => {
          this.setState({
            supermarkets
          })
        })
        .catch(res => alert(res.error))
      }
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
    this.setState({
      supermarket_id: supermarket_id
    })

    UserApiService.updateUser({
      supermarket_id,
      city
    })
      .then(() => this.props.history.push('/shopping-list'))
      .catch(res => alert(res.error))
  }

  login = (email, password) => {
    AuthApiService.postLoginUser({
      email: email,
      password: password
    })
      .then(res => {
        TokenService.saveAuthToken(res.authToken)

        return UserApiService.getOwnUser()
            .then(user => {
              const supermarketId = user.supermarket_id
              const userId = user.id
              console.log(userId)
              
              ShoppingListApiService.getItems(user.id)
                .then(items => {
                  this.setState({
                    shopping_list: items,
                    supermarket_id: supermarketId,
                    user_id: userId
                  })

                  this.props.history.push('/shopping-list')
                })
            })
            .catch(res => alert(res.error))

      })
      .catch(res => alert(res.error))
  }

  checkoff = (userId, itemId) => {
    const itemsArray = this.state.shopping_list
    console.log(itemsArray)
    const selectItem = itemsArray.find(item => parseInt(item.id) === parseInt(itemId))
    const indexOfItem = itemsArray.indexOf(selectItem)

    itemsArray.splice(indexOfItem, 1)

    this.setState({
        shopping_list: itemsArray
    })

    ShoppingListApiService.deleteItem(userId, itemId)
        .catch(res => alert(res.error))
  }

  addItem = (item) => {
    const list = this.state.shopping_list

    list.push(item)
    
    this.setState({
      shopping_list: list
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
          {(this.state.shopping_list.length > 0) ?
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
                user_id = {this.state.user_id}
                item_list = {this.state.item_list}
                shopping_list = {this.state.shopping_list}
                supermarket_id = {this.state.supermarket_id}
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

export default withRouter(App);