import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'


import './App.css'
import HomePage from './HomePage'
import Login from './Login'
import SignUp from './SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path='/' component={HomePage} />  
              <Route path='/sign' component={SignUp} />
              <Route path='/login' component={Login} />
            </Switch>
          </div>
      </Provider>
      </BrowserRouter>
    )
  }
}

export default App
