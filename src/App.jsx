import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, User, P } from './Pages/index';
import NotFound from "./Pages/NotFound/nf";
class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/user/:user" component={User}/>
                    <Route path="/p/:p" component={P}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;