import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./contact.css";
const ContactMe = () => {
    return (
        <div className="contact-me">
            <div className="contact-title-div">
                <h1
                    className="contact-tile"
                    style={{
                        marginTop: "100px",
                        borderBottom: "3px solid green",
                        padding: "10px",
                    }}
                >
                    Simply notify me{" "}
                    <span
                        style={{
                            color: "green",
                        }}
                    >
                        if you do need something.
                    </span>
                </h1>
            </div>

            <Container>
                <Row className="contact-row">
                    <Col className="contact-address">
                        <div style={{ marginTop: "100px" }}>
                            <i
                                className="fa fa-map position-absolute map me-4"
                                style={{ color: "#ee481f" }}
                            ></i>
                            <span className="ms-5 address-title">
                                Address Point
                            </span>
                            <p
                                style={{
                                    marginTop: "10px",
                                    fontSize: "1.3rem",
                                }}
                            >
                                Uttara, Dhaka-1230
                            </p>
                            <p
                                style={{
                                    marginTop: "10px",
                                    fontSize: "1.3rem",
                                }}
                            >
                                Bangladesh
                            </p>
                        </div>

                        <div
                            style={{ marginTop: "10px", marginBottom: "30px" }}
                        >
                            <i
                                className="fas fa-mobile-alt map me-3"
                                style={{ color: "#ee481f" }}
                            ></i>

                            <span className="address-title">
                                (+88) 01887830405
                            </span>
                        </div>
                        <div className="profile-col-icons3">
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

                            <a
                                href="https://github.com/Rafi5734"
                                className="icons"
                            >
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <Footer></Footer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactMe;
