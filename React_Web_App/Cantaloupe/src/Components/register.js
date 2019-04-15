import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Footer from "../components/Footer.js";

const Register = () => {
  return (
      <div className="navbar-fixed-solution">
        <div className="container">
        <MDBContainer>
        <MDBRow>
            <MDBCol md="6">
            <form>
                <h3 className="h3Title color">&nbsp; Sign Up Today!</h3>
                <div className="grey-text">
                <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                />
                <MDBInput
                    label="Confirm password"
                    icon="exclamation-triangle"
                    group
                    type="password"
                    validate
                />
                </div>
                <div className="text-center">
                <MDBBtn id="POSTRegister" outline color="amber">Register</MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
        </div>
        <Footer/>
    </div>
  );
};

export default Register;