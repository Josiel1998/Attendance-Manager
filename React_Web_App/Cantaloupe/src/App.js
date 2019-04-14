import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import index from './components/index';
import register from './components/register';
import login from './components/login';
import error from './components/error';
import NavBar from './components/NavBar';

import logo from "./Cantaloupe-UI/ios/cantaloupe-logo.png"

class App extends Component {
  render() {

    let interested = [
      {label: 'Interested?', link: 'interested'}
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
          <NavBar links={links} landing={landing} interested={interested} logo={logo} />
          <Switch>
            <Route path="/" component={index} exact/>
            <Route path="/register" component={register} />
            <Route path="/login" component={login} />      
            <Route component={error} />
          </Switch>        
        </div>

      </BrowserRouter>

    );
  }
}

export default App;
