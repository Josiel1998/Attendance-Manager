import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from "axios";

import index from './components/index';
import Register from './components/register';
import Login from './components/login';
import error from './components/error';
import NavBar from './components/NavBar';
import subscribe from './components/interested';
import dashboard from './components/dashboard';

import logo from "./Cantaloupe-UI/ios/cantaloupe-logo.png"


const auth ={
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb,100)  //fake async
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest}) =>(
  <Route {...rest} render={() =>(
    auth.isAuthenticated === true 
    ? <Component {...rest} />
    : <Redirect to="/login" />
  )}/>
)

class App extends Component {
  state ={
    bearerToken: null
  }


  //POST Register Request
  registerUser = (event) => {
    //Prevent page from reloading
    event.preventDefault();

    const fname = event.target.elements.register_fname.value;
    const lname = event.target.elements.register_lname.value;
    const email_r = event.target.elements.register_email.value;
    const password_r = event.target.elements.register_password.value;

    axios.post('https://refpv61eu7.execute-api.us-east-1.amazonaws.com/dev/auth/register',{
      first_name: fname,
      last_name: lname,
      email: email_r,
      password: password_r
    })  //Success
    .then(function (response) {
      const bearerToken = response.data.bearer_token;
      console.log(response);
      console.log(bearerToken);
      //this.setState({bearerToken});
      alert("Success!");
      //<Redirect to="/login"/>
  })  //Failure
    .catch(function (error) {
      console.log(error);
      alert("Oops! Something went wrong. Try again.");
    });
  }

    //POST Login Request
    loginUser = (event) => {
      //Prevent page from reloading
      event.preventDefault();
  
      const email_l = event.target.elements.login_Email.value;
      const password_l = event.target.elements.login_Password.value;
  
      axios.post('https://refpv61eu7.execute-api.us-east-1.amazonaws.com/dev/auth/login',{
        email: email_l,
        password: password_l,
      })  //Success
      .then(function (response) {
        const bearerToken = response.data.bearer_token;
        console.log(response);
        console.log(bearerToken);
        //this.setState({bearerToken});
        alert("Success!");
        auth.authenticate();
        //<Redirect to="/dashboard"/>

    })  //Failure
      .catch(function (error) {
        console.log(error);
        alert("Oops! Incorrect credentials.");
      });
    }
  


  render() {

  //Navigation Links
    let subscription = [
      {label: 'Subscribe', link: '/subscribe'}
    ];
    let links = [
      {label: 'Register', link: '/register'},
      {label: 'Login', link: '/login'}
    ];

    let landing = [
        {label: 'Home', link: '/'}
    ];

    let dash=[
      {label: 'Dashboard', link: "/dashboard"}
    ];

    return (
      <BrowserRouter>
        <div>
          <NavBar links={links} landing={landing} subscribe={subscription} dash = {dash} logo={logo} />

          <Switch>
            <Route path="/" component={index} exact/>
            <Route path="/register" render={(props) => <Register {...props} registerUser={this.registerUser} />}/>
            <Route path="/login" render={(props) => <Login {...props} loginUser={this.loginUser} />} /> 
            <Route path="/subscribe" component={subscribe} />  
            <PrivateRoute path="/dashboard" component={dashboard} />     
        
            <Route component={error} />
          </Switch>        
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
