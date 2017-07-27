import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import store from './redux/store'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/shared/Sidebar/Sidebar'

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <Route render={({ location }) => {
                    return location.pathname !== '/' ?
                    (<Sidebar />) : null
                  }} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
            </Switch>
          </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
