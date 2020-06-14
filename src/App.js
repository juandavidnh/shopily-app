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
import PrivateRoute from './components/Utils/PrivateRoute'
import PublicOnlyRoute from './components/Utils/PublicRoute'
import { withRouter } from 'react-router'
import './App.css'


class App extends React.Component {
  state = {
    //supermarket_id keeps track of the supermarket the user picked
    supermarket_id: 0,
    //user_id keeps track of the logged in user
    user_id: 0,
    item_list: [],
    shopping_list: [],
    supermarkets: [],
  }

  //update state from database every time App component renders
  componentDidMount() {
    //get all supermarkets available in database and set them as state
    ShoppingListApiService.getAllSupermarkets()
        .then(supermarkets => {
          this.setState({
            supermarkets: supermarkets
          })
        })
        .catch(res => alert(res.error))

    const hasToken = TokenService.getAuthToken()

    //when the user signs in a token is locally stored. If a token is found, get user's shopping list items
    //and set them to state and get all available items in order to render the whole product list when 
    //wanting to add an item to personal shopping list.
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
      }
  }

  //signUp function calls /api/users/signup endpoint which returns a JWT token. The token is locally stored
  signUp = (first_name, last_name, email, password) => {
    AuthApiService.postUser({
        first_name,
        last_name,
        email,
        password
      })
        .then(res => {
          TokenService.saveAuthToken(res.authToken)

          return UserApiService.getOwnUser()
            .then(user => {
              const userId = user.id

              ItemsApiService.getItems()
                .then(items => {
                  this.setState({
                    item_list: items,
                    user_id: userId
                  })
              })

              this.props.history.push('/pick-supermarket')
            })
          
        })
        .catch(res => alert(res.error))
  }

  //new users can pick a favorite supermarket while current users can switch their favorite supermarket
  pickSupermarket = (city, supermarket_id) => {  
    this.setState({
      supermarket_id: supermarket_id
    })

    UserApiService.updateUser({
      supermarket_id: supermarket_id,
      city: city
    })
      .then(() => this.props.history.push('/shopping-list'))
      .catch(res => alert(res.error))
  }

  //login calls the /api/auth/login endpoint. If email and password match those in db, a JWT token is generated 
  //and locally stored
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
              
              ShoppingListApiService.getItems(user.id)
                .then(shoppingItems => {

                  ItemsApiService.getItems()
                    .then(items => {
                      this.setState({
                        item_list: items,
                        shopping_list: shoppingItems,
                        supermarket_id: supermarketId,
                        user_id: userId
                      })

                      this.props.history.push('/shopping-list')
                    })
                })
            })
      })
      .catch(res => alert(res.error))
  }

  //logout resets the current state to delete any trace of previous signins
  logout = () => {
    this.setState({
      supermarket_id: 0,
      user_id: 0,
      item_list: [],
      shopping_list: [],
    })
  }

  //checkoff deletes items from user's shopping list
  checkoff = (userId, itemId) => {
    const itemsArray = this.state.shopping_list
    const selectItem = itemsArray.find(item => parseInt(item.id) === parseInt(itemId))
    const indexOfItem = itemsArray.indexOf(selectItem)

    itemsArray.splice(indexOfItem, 1)

    this.setState({
        shopping_list: itemsArray
    })

    ShoppingListApiService.deleteItem(userId, itemId)
        .catch(res => alert(res.error))
  }

  //addItem updates state, adding an item to the user's shopping list
  addItem = (item) => {
    const list = this.state.shopping_list

    list.push(item)
    
    this.setState({
      shopping_list: list
    })
  }


  render() {
    //main app state and functions will be passed down as props 
    return(
    <div className="App">
      <Nav logout={this.logout}/>
      
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
          <PublicOnlyRoute
            path={'/login'}
            component={(props) =>
              <LoginPage 
                {...props}
                login = {this.login}
              />}
          />
          <PublicOnlyRoute
            path={'/signup'}
            component={(props) =>
              <SignUpPage 
                {...props}
                users = {this.state.users}
                signup = {this.signUp}
              />}
          />
          <PrivateRoute
            path={'/pick-supermarket'}
            component={(props) =>
              <SupermarketPage 
                {...props}
                supermarkets = {this.state.supermarkets}
                pickSupermarket = {this.pickSupermarket}
              />}
          />
          {(this.state.shopping_list.length >= 0) ?
          <PrivateRoute
            path={'/shopping-list'}
            component={(props) =>
              <ShoppingListPage 
                {...props}
                shopping_list = {this.state.shopping_list}
                checkoff = {this.checkoff}
              />}
          /> 
          :
          <>Loading...</>
          }
          <PrivateRoute
            path={'/shopping-route'}
            component={(props) =>
              <ShoppingRoutePage 
                {...props}
                shopping_list = {this.state.shopping_list}
              />}
          />
          <PrivateRoute
            path={'/settings'}
            component={(props) =>
              <SettingsPage 
                {...props}
                supermarkets = {this.state.supermarkets}
                pickSupermarket = {this.pickSupermarket}
              />}
          />
          <PrivateRoute
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