import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./styles/index.css";

//Images
import chris from "./images/chris.png";
import daniel from "./images/daniel.png";
import josiel from "./images/josiel.png";
import max from "./images/max.png";
import nick from "./images/nick.png";

//Components
import NavBar from './Components/NavBar.js';
import Contact from './Components/Contact.js';

class LandingPage extends Component {
    state = {
      };

    render() {

        let links = [
            {label: 'Home', link: '#'},
            {label: 'Register', link: '#register'},
            {label: 'Login', link: '#login'}
        ];

        return (
            <React.Fragment>
                <NavBar links={links}/>
                <br/>
                <div className="container">
                
                    <h3 className="h3Title color">&nbsp; Why Cantaloupe?</h3>
                    <hr/>

                    <div className="row align-items-center">
                        <div className="col-lg-4 our-team">
                            <center>
                                <div className="rounded-circle">
                                    <i className="fas fa-fighter-jet fa-7x"></i>
                                </div>
                                <h2>Fast</h2>
                                <p>The Cantaloupe check in process is fast and easy! 
                                   All you need is your smartphone -- no clicker, pencil or paper!</p>
                            </center>
                        </div>
                        <div className="col-lg-4 our-team">
                            <center>
                                <div className="rounded-circle">
                                    <i className="fas fa-shield-alt fa-7x"></i>
                                </div>
                                <h2>Secure</h2>
                                <p>Cantaloupe will use bluetooth technology to validate location and dual athentication for attendance check-in records. 
                                   Please visit our FAQ for more details.</p>
                            </center>
                        </div>
                        <div className="col-lg-4 our-team">
                            <center>
                                <div className="rounded-circle">
                                    <i className="fas fa-user-friends fa-7x"></i>
                                </div>
                                <h2>Flexible</h2>
                                <p>Cantaloupe offers attendance management for everyone! 
                                   Professor and students are able to manage attendances for any course and extracurricular activities!</p>
                            </center>
                        </div>
                    </div>

                    <br/>

                    <h3 className="h3Title color">&nbsp; Meet the Team!</h3>
                    <hr/>

                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={josiel}/>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a className="fab far fa-envelope"></a>
                                        </li>
                                    </ul>
                                    <div className="team-content">
                                        <h3 className="title">Josiel</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={josiel}/>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a className="fab far fa-envelope"></a>
                                        </li>
                                    </ul>
                                    <div className="team-content">
                                        <h3 className="title">Josiel</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={josiel}/>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a className="fab far fa-envelope"></a>
                                        </li>
                                    </ul>
                                    <div className="team-content">
                                        <h3 className="title">Josiel</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={josiel}/>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a className="fab far fa-envelope"></a>
                                        </li>
                                    </ul>
                                    <div className="team-content">
                                        <h3 className="title">Josiel</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={josiel}/>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a className="fab far fa-envelope"></a>
                                        </li>
                                    </ul>
                                    <div className="team-content">
                                        <h3 className="title">Josiel</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3 ml-auto">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={josiel}/>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <a className="fab fa-linkedin"></a>
                                        </li>
                                        <li>
                                            <a className="fab far fa-envelope"></a>
                                        </li>
                                    </ul>
                                    <div className="team-content">
                                        <h3 className="title">Josiel</h3>
                                        <span className="post">Web Developer</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <br/>

                    <h3 className="h3Title color">&nbsp; Lets talk!</h3>
                    <hr/>
                    <Contact/>
                    

                </div>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<LandingPage />, document.getElementById("landingPage"));