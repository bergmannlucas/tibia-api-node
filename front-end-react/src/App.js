import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Worlds from './pages/Worlds';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/worlds' component={Worlds}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
