import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView} from 'mdbreact';

import imgCantaloupe from "../Cantaloupe-UI/Cantaloupe.png"

import chris from "../styles/images/chris.png";
import josiel from "../styles/images/josiel.png";
import nick from "../styles/images/nick.png";
import max from "../styles/images/max.png";
import daniel from "../styles/images/daniel.png";

import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

const index = () =>{
    return(
        <React.Fragment>

        <div className="navbar-fixed-solution-index">
                <MDBCarousel
                    activeItem={1}
                    length={1}
                    showControls={false}
                    showIndicators={false}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={imgCantaloupe}
                            alt="First slide"
                        />
                        </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            
            <br/>
            
            <div className="container">
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
                                    <img src={josiel} alt="Member: Josiel"/>
                                </div>
                                <ul className="social">
                                    <li>
                                        <a className="fab fa-linkedin" href="https://www.linkedin.com/in/josieldelgadillo" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className="fab far fa-envelope" href="malito:josieldelgadillo98@gmail.com" target="_blank"></a>
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
                                    <img src={nick} alt="Member: Nick"/>
                                </div>
                                <ul className="social">
                                    <li>
                                        <a className="fab fa-linkedin" href="" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className="fab far fa-envelope" href="" target="_blank"></a>
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
                                    <img src={max} alt="Member: Max" />
                                </div>
                                <ul className="social">
                                    <li>
                                        <a className="fab fa-linkedin" href="" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className="fab far fa-envelope" href="" target="_blank"></a>
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
                                    <img src={daniel} alt="Member: Daniel" />
                                </div>
                                <ul className="social">
                                    <li>
                                        <a className="fab fa-linkedin" href="" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className="fab far fa-envelope" href="" target="_blank"></a>
                                    </li>
                                </ul>
                                <div className="team-content">
                                    <h3 className="title">Daniel</h3>
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
                                    <img src={chris} alt="Member: Chris" />
                                </div>
                                <ul className="social">
                                    <li>
                                        <a className="fab fa-linkedin" href="https://www.linkedin.com/in/prattcmp" target="_blank"></a>
                                    </li>
                                    <li>
                                        <a className="fab far fa-envelope" href="chris@storyclip.co" target="_blank"></a>
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
                                    <img alt="Member: Nish"/>
                                </div>
                                <ul className="social">
                                    <li>
                                        <a className="fab far fa-envelope" href="nshchpagarani812@gmail.com" target="_blank"></a>
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
        </div>
        
        <Footer/>
    
    </React.Fragment>
    );
}

export default index;