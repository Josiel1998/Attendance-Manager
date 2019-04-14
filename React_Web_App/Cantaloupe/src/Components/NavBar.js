import React, { Component } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} 
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

        let interestedMarkup = this.props.interested.map((link, index) => {
            return (
                <MDBNavItem>
                    <Link className="nav-link interestedLink" to={link.link}>{link.label}</Link>
                </MDBNavItem>
            );
        });

        let landingMarkup = this.props.landing.map((link, index) => {
            return (
                <MDBNavItem>
                    <Link className="nav-link" to={link.link}>{link.label}</Link>
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
                    <img className="navbar-brand" width="35" height="35" src={this.props.logo} alt="Cantaloupe Logo"/>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} color="red" />
            
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            {landingMarkup}
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {interestedMarkup}
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