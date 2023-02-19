import React, { Component } from 'react'
import './App.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//setting themes
import themeObject from './util/theme'

//MUI stuff
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

//redux
import {Provider} from 'react-redux'
import store from './redux/store'

// pages
import home from './pages/home'
import welcome from './pages/welcome'
import vendor from './pages/vendor'
import checkout from './pages/checkout'
import orderSuccess from './pages/orderSuccess'

import NavBar from './components/NavBar'

const theme = createMuiTheme(themeObject)

class App extends Component{
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <NavBar />
            <div style={{overflow:'hidden'}}>
              <Switch>
                <Route exact path="/" component={welcome} />
                <Route exact path="/home" component={home} />
                <Route exact path="/welcome" component={welcome} />
                <Route exact path="/vendor" component={vendor} />
                <Route exact path="/checkout" component={checkout} />
                <Route exact path="/orderSuccess" component={orderSuccess} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App