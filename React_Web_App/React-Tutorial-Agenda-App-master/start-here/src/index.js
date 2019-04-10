import React, { Component } from "react";
import ReactDOM, {BrowserRouter} from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";


class App extends Component {
    state = {
      };

    render() {
        return (
            <React.Fragment>
            <MDBContainer>
                <MDBRow>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
                <MDBCol xl="1" lg="2" md="4" sm="6" size="12">xl=1 lg=2 md=4 sm=6 xs=12</MDBCol>
            </MDBRow>
            </MDBContainer>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));