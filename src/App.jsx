import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, User, P } from './Pages/index';
import Community from './Pages/community/community';
import NotFound from './Pages/NotFound/nf';
import State from './Pages/State/state';
import CommunityView from './Pages/community/view/view';
import Md from './Pages/markdown/md';
import Tags from './Pages/tags/tags';
import Welcome from './Pages/welcome/app';
import { Main } from './Plugin/core/app';

class App extends Component {
  render() {
    return (
      <div className="app" id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:user" component={User} />
          <Route path="/u/:user" component={User} />
          <Route path="/p/:p" component={P} />
          <Route path="/state" component={State} />
          <Route path="/md" component={Md} />
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/community" component={Community} />
          <Route path="/community/view/:post" component={CommunityView} />
          <Route exact path="/tag/:t" component={Tags} />
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
