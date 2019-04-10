import React, { Component } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} 
    from "mdbreact";

class NavbarPage extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        this.props.links.map((link, index)=> {
            return {

            };
        });

    return (
        <MDBNavbar color="unique-color-dark" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">CANTALOUPE LOGO</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
            <MDBNavItem active>
                <a className="nav-link" href="/">About</a>
            </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <MDBNavItem>
                <a className="nav-link" href="/register">Register</a>
            </MDBNavItem>
            <MDBNavItem>
                <a className="nav-link" href="/login">Login</a>
            </MDBNavItem>
            {/*<MDBNavItem>
                <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>*/}
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBNavbar>
        );
    }
}

    export default NavbarPage;