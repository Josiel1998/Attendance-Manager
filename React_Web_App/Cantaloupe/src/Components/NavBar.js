import React, { Component } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} 
    from "mdbreact";
import "../styles/index.css";

class NavbarPage extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        let landingMarkup = this.props.landing.map((link, index) => {
            return (
                <MDBNavItem>
                    <a className="nav-link" href={link.link}>{link.label}</a>
                </MDBNavItem>
            );
        });

        let linksMarkup = this.props.links.map((link, index) => {
            return (
                <MDBNavItem>
                    <a className="nav-link" href={link.link}>{link.label}</a>
                </MDBNavItem>
            );
        });

    return (
        <MDBNavbar className="navbar-light" color="grey lighten-4" scrolling expand="md" fixed="top" tag="div">
        <MDBNavbarBrand>
            <img className="navbar-brand" width="40" height="40" src={this.props.logo}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} color="red" />
        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem active>
                    {landingMarkup}
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                {linksMarkup}
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