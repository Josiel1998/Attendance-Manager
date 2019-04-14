import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import index from './components/index';
import register from './components/register';
import login from './components/login';
import error from './components/error';
import NavBar from './components/NavBar';
import subscribe from './components/interested';

import logo from "./Cantaloupe-UI/ios/cantaloupe-logo.png"

class App extends Component {
  render() {

    let subscription = [
      {label: 'Interested?', link: 'subscribe'}
    ];

    let links = [
      {label: 'Register', link: '/register'},
      {label: 'Login', link: '/login'}
  ];

  let landing = [
      {label: 'Home', link: ''},
  ];

    return (
      <BrowserRouter>
        <div>
          <NavBar links={links} landing={landing} subscribe={subscription} logo={logo} />
          <Switch>
            <Route path="/" component={index} exact/>
            <Route path="/register" component={register} />
            <Route path="/login" component={login} /> 
            <Route path="/subscribe" component={subscribe} />      
            <Route component={error} />
          </Switch>        
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
