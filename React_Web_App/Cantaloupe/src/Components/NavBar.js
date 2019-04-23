import React, { Component } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, 
    MDBDropdownItem, MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownMenu} 
    from "mdbreact";
import { Link } from "react-router-dom";
import "../styles/stylesheet.css"

class NavbarPage extends Component {
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        let subscribeMarkup = this.props.subscribe.map((link, index) => {
            return (
                <MDBNavItem>
                    <Link className="nav-link interestedLink" key={link.label} to={link.link}>{link.label}</Link>
                </MDBNavItem>
            );
        });

        let landingMarkup = this.props.landing.map((link, index) => {
            return (
                <MDBNavItem>
                    <Link className="nav-link isDisabled" key={link.label} to={link.link}>{link.label}</Link>
                </MDBNavItem>
            );
        });

        let linksMarkup = this.props.links.map((link, index) => {
            return (
                <MDBNavItem>
                    <Link className="nav-link isDisabled" key={link.label} to={link.link}>{link.label}</Link>
                </MDBNavItem>
            );
        });

    return (
            <MDBNavbar className="navbar-light" color="grey lighten-4" scrolling expand="md" fixed="top" tag="div">
                <MDBNavbarBrand>
                    <img className="navbar-brand" width="35" height="35" src={this.props.logo} alt="Cantaloupe Logo"/>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} color="red" />
            
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                            {landingMarkup}
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {subscribeMarkup}
                        {linksMarkup}
                    <MDBNavItem>
                        <MDBDropdown className="isDisabled">
                        <MDBDropdownToggle nav caret>
                            <MDBIcon icon="user" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem href="#!">Account</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Settings</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Help</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Sign out</MDBDropdownItem>
                        </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}


export default NavbarPage;