import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./projects.css";
import ProjectCover1 from "../../projects1-banner.png";
import ProjectCover2 from "../../tour-cover.png";
const Projects = () => {
    return (
        <div className="theProjects mb-5">
            <Container>
                <Row md={12}>
                    <div className="projects-title-head" data-aos="fade-right">
                        <h1
                            className="project-title text-center text-nowrap"
                            // style={{ marginTop: "100px" }}
                        >
                            There are my projects.
                        </h1>
                    </div>
                    <Col lg={6} className="mt-5">
                        <h1>1.</h1>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <img
                                src={ProjectCover1}
                                className="img-fluid"
                            ></img>
                        </div>
                    </Col>
                    <Col lg={6} className="projects-details mt-5">
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <h2 className="text-center mt-3">Bike Bikry App</h2>
                            <p className="lead">
                                A single page bike bikry app where people are
                                able to buy there desirable bike and can
                                checkout with their information . There are also
                                i implement firebase authentication(Email,
                                Password login & Registration) method. Also
                                there have dashboard for individual client and
                                also admin. But this website UI is bad quality.
                                But all the functionality are correct and
                                optimized.
                            </p>
                            <div className="projects-icons">
                                <a href="https://github.com/Rafi5734/Bike-Bikry-App-Public">
                                    <i className="fab fa-github project-icon"></i>
                                </a>
                                <a href="https://simple-firebase-authenti-b3a2a.web.app/">
                                    <i class="fas fa-satellite-dish project-icon"></i>
                                </a>
                                <a href="https://stark-spire-82280.herokuapp.com/services">
                                    <i class="fas fa-server project-icon"></i>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="mt-5">
                        <h1>2.</h1>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                        >
                            <img
                                src={ProjectCover2}
                                className="img-fluid"
                            ></img>
                        </div>
                    </Col>
                    <Col lg={6} className="projects-details mt-5">
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500"
                        >
                            <h2 className="text-center mt-3">YACHT & MARINE</h2>
                            <p className="lead">
                                A user may book their desired Tour Event and
                                check out with their details using this Tour
                                app. This program has a completely functional
                                front-end and back-end architecture, as well as
                                a No-SQL database for data storage (MongoDB). I
                                use the (Google Sign-up) method for
                                authentication. There is also the ability to
                                manage all orders and to view his or her own
                                orders. If he or she wants to delete an
                                irrelevant event, this software also has that
                                feature.
                            </p>
                            <div className="projects-icons">
                                <a href="https://github.com/Rafi5734/Tour-apps">
                                    <i className="fab fa-github project-icon"></i>
                                </a>
                                <a href="https://tour-application-979ee.web.app/">
                                    <i class="fas fa-satellite-dish project-icon"></i>
                                </a>
                                <a href="https://ghastly-castle-73206.herokuapp.com/tours">
                                    <i class="fas fa-server project-icon"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;
