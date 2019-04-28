import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import Footer from "./Footer.js";

const Register = (props) => {

  return (
      <div className="navbar-fixed-solution">
        <div className="container">
        <MDBContainer>
        <MDBRow>
            <MDBCol md="6">
                <h3 className="h3Title color">&nbsp; Sign Up Today!</h3>
            <form onSubmit={props.registerUser}>
                
                <div className="grey-text">
                <MDBInput  
                    id="register_fname"
                    label="Your first name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput  
                    id="register_lname"
                    label="Your last name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    id="register_email"
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    id="register_password"
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    autoComplete="on"
                    validate
                />             
                    <div className="text-center">
                        {/*<MDBBtn id="POSTRegister" outline color="amber">Register</MDBBtn>*/}
                        <button className="btn btn-outline-amber Ripple-parent" id="POSTRegister" type="submit">Register</button>
                    </div>
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