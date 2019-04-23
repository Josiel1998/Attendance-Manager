import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="navbar-fixed-solution">
        <div className="container">
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <form onSubmit={props.loginUser}>
                <h3 className="h3Title color">&nbsp; Sign In</h3>
                    <div className="grey-text">
                    <MDBInput
                        id = "login_Email"
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        id = "login_Password"
                        label="Type your password"
                        icon="lock"
                        group
                        autoComplete="on"
                        type="password"
                        validate
                    />
                    <Link to="/">Forgot password?</Link>
                    <div className="text-center">
                        <button className="btn btn-outline-amber Ripple-parent" id="POSTLogin" type="submit">Register</button>
                    </div>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    </div>
  );
};

export default Login;