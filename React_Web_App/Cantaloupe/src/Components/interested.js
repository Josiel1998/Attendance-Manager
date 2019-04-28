import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const interested = () => {
  return (
    <div className="navbar-fixed-solution">
        <div className="container">
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <form>
                <h3 className="h3Title color">&nbsp; Subscribe Today!</h3>
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
                    </div>
                    <div className="text-center">
                    <MDBBtn outline color="amber">
                        IM IN
                    </MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </div>
    </div>
  );
};

export default interested;