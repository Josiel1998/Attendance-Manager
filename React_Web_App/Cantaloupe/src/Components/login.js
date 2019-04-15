import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Login = () => {
  return (
    <div className="navbar-fixed-solution">
        <div className="container">
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <form>
                <h3 className="h3Title color">&nbsp; Sign In</h3>
                    <div className="grey-text">
                    <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn id="POSTLogin" outline color="amber">Login</MDBBtn>
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