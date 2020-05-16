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
import './App.css'


class App extends React.Component {
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
              />}
          />
          <Route
            path={'/signup'}
            component={(props) =>
              <SignUpPage 
                {...props}
              />}
          />
          <Route
            path={'/pick-supermarket'}
            component={(props) =>
              <SupermarketPage 
                {...props}
              />}
          />
          <Route
            path={'/shopping-list'}
            component={(props) =>
              <ShoppingListPage 
                {...props}
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
              />}
          />
          <Route
            path={'/add-item'}
            component={(props) =>
              <AddItemPage 
                {...props}
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