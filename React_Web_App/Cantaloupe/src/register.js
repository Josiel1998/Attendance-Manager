import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import NavBar from './Components/NavBar.js';

class Register extends Component {
    state = {
      };

    render() {
        return (
            <React.Fragment>
                REGISTER PAGE
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Register />, document.getElementById("register"));