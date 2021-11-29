import React from "react";
import {
    Col,
    Container,
    OverlayTrigger,
    ProgressBar,
    Row,
    Tooltip,
    Button,
} from "react-bootstrap";
import "./about.css";
import MyImage from "../../profile-pic.png";
const AboutMe = () => {
    return (
        <div className="about-me">
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        <img
                            src={MyImage}
                            className="about-img"
                            data-aos="zoom-in"
                        ></img>
                        <div className="profile-details-name mt-5">
                            <div data-aos="fade-right" className="my-name">
                                <span className="primary-text">
                                    Hi, I'M{" "}
                                    <span className="highlighted-text">
                                        Kamrul
                                    </span>
                                </span>
                            </div>
                            <div data-aos="fade-left">
                                <p className="profile-role-tagline lead">
                                    Diligent, Passionate, a full-stack web
                                    developer with modern web technologies. I
                                    want to dedicated myself with growing
                                    skilled knowledge, dream and ambition in a
                                    renown software / IT agencies and grow
                                    rapidly with increasing responsibilities.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className="skills-col">
                        <Row className="skills">
                            <div data-aos="fade-left">
                                <h1 className="skill-title">My Skills Are</h1>
                            </div>
                            <Col lg={12} sm={12} className="mt-5 skills-all">
                                <div
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <span className="">HTML5</span>
                                    <ProgressBar
                                        animated
                                        now={80}
                                        label={"80%"}
                                        className="mb-2"
                                    />
                                    <span>CSS3</span>
                                    <ProgressBar
                                        animated
                                        variant="success"
                                        now={80}
                                        label={"80%"}
                                        className="mb-2"
                                    />

                                    <span>Bootstrap</span>
                                    <ProgressBar
                                        animated
                                        variant="info"
                                        now={90}
                                        label={"90%"}
                                        className="mb-2"
                                    />

                                    <span>Tailwind CSS</span>
                                    <ProgressBar
                                        animated
                                        variant="info"
                                        now={80}
                                        label={"80%"}
                                        className="mb-2"
                                    />

                                    <span>Javascript(ES6)</span>
                                    <ProgressBar
                                        animated
                                        variant="warning"
                                        now={70}
                                        label={"70%"}
                                        className="mb-2"
                                    />
                                    <span>React.js</span>
                                    <ProgressBar
                                        animated
                                        variant="danger"
                                        now={70}
                                        label={"70%"}
                                        className="mb-2"
                                    />
                                    <span>React-Bootstrap</span>
                                    <ProgressBar
                                        animated
                                        variant="primary"
                                        now={80}
                                        label={"80%"}
                                        className="mb-2"
                                    />

                                    <span>Material-UI</span>
                                    <ProgressBar
                                        animated
                                        variant="primary"
                                        now={70}
                                        label={"70%"}
                                        className="mb-2"
                                    />

                                    <span>Node/Express.js</span>
                                    <ProgressBar
                                        animated
                                        variant="success"
                                        now={60}
                                        label={"60%"}
                                        className="mb-2"
                                    />

                                    <span>Firebase</span>
                                    <ProgressBar
                                        animated
                                        variant="warning"
                                        now={70}
                                        label={"70%"}
                                        className="mb-2"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="profile-col-icons2">
                <a
                    href="https://www.facebook.com/kamrulhasun.rafi"
                    className="icons"
                >
                    <i class="fab fa-facebook-square"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/kamrul-hasun-rafi/"
                    className="icons"
                >
                    <i class="fab fa-linkedin"></i>
                </a>

                <a href="https://github.com/Rafi5734" className="icons">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
