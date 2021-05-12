import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, User, P } from './Pages/index';
import NotFound from './Pages/NotFound/nf';
import State from './Pages/State/state';

import { Main } from './Plugin/core/app';

class App extends Component {
  render() {
    return (
      <div className="app" id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:user" component={User} />
          <Route path="/p/:p" component={P} />
          <Route path="/state" component={State} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

window.onload = function () {
  Main();
};

export default App;
