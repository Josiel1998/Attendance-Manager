import React, { Component } from "react";
import ReactDOM from 'react-dom';

//Styles
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
import logo from "./Cantaloupe-UI/ios/cantaloupe-logo.png"

//Components
import NavBar from './Components/NavBar.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';

class LandingPage extends Component {
    state = {
      };

    render() {

        let links = [
            {label: 'Register', link: '#register'},
            {label: 'Login', link: '#login'}
        ];

        let landing = [
            {label: 'Home', link: '#'},
        ];

        return (
            <React.Fragment>
                <NavBar links={links} landing={landing} logo={logo} />

                <div className="container navbar-fixed-solution">
                
                    <h3 className="h3Title color">&nbsp; Why Cantaloupe?</h3>

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
                    <br/>

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
                                        <img src={nick}/>
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
                                        <h3 className="title">Nick</h3>
                                        <span className="post">IOS Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={max}/>
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
                                        <h3 className="title">Max</h3>
                                        <span className="post">Android Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={daniel}/>
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
                                        <span className="post">Poduct Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="row align-items-center">
                            <div className="col-6 col-sm-3">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src={chris}/>
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
                                        <h3 className="title">Chris</h3>
                                        <span className="post">Backend Developer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-sm-3 ml-auto">
                                <div className="our-team">
                                    <div className="pic">
                                        <img />
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
                                        <h3 className="title">Nish</h3>
                                        <span className="post">Android Developer</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <br/>

                    <h3 className="h3Title color">&nbsp; Lets talk!</h3>
                    <br/>
                    <Contact/>
                </div>
                
                <Footer/>
            
            </React.Fragment>
        );
    }
}

ReactDOM.render(<LandingPage />, document.getElementById("landingPage"));