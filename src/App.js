import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './component/Login';
import ListMessages from './component/ListMessages';
import './App.css';

class App extends Component {
  
  state= {
    pseudo: ''
  }
  
  render () {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/message' component={ListMessages} />
        </Switch>
      </Fragment>
    )
  }
}

export default App
