import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./biography.css";
const Biography = () => {
    return (
        <Container className="bio-container">
            <div className="mb-5">
                <div data-aos="fade-left">
                    <h1 className="text-center bio-title">BIOGRAPHY</h1>
                </div>
                <div data-aos="flip-up">
                    <p className="text-center lead">
                        Meticulous web developer with fresh of frontend
                        experience designing and building responsive web
                        designer. Proficient with CSS, tailwindCSS,
                        react-bootstrap, M-UI and JS Frameworks(React.js,
                        Node.js, Express.js), No-SQL(MongoDB) with extensive
                        knowledge of UX and user psychology and passion for
                        responsive website design and a farm believer in the
                        mobile-first approach.
                    </p>
                </div>
            </div>
            <Container className="bio-data">
                <Row className="mb-3">
                    <Col>
                        <div
                            className="bio-name text-center p-3 bio"
                            data-aos="fade-right"
                        >
                            <span className="bio1">Name:</span>{" "}
                            <span className="bio2">Md Kamrul Hasan</span>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="bio-date text-center p-3 bio"
                            data-aos="flip-up"
                        >
                            <span className="bio1">Birthday:</span>{" "}
                            <span className="bio2">December 31, 2001</span>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="bio-age text-center p-3 bio"
                            data-aos="fade-left"
                        >
                            <span className="bio1">Age:</span>{" "}
                            <span className="bio2">20 Years</span>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <div
                            className="bio-address text-center p-3 bio"
                            data-aos="fade-right"
                        >
                            <span className="bio1">Address:</span>{" "}
                            <span className="bio2">Uttara, Dhaka</span>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="bio-phone text-center p-3 bio"
                            data-aos="flip-up"
                        >
                            <span className="bio1">Phone:</span>{" "}
                            <a href="tel: +8801887830405">
                                <span className="bio2 phone">
                                    (+88) 01887830405
                                </span>{" "}
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="bio-whatsapp text-center p-3 bio mt-2"
                            data-aos="fade-left"
                        >
                            <span className="bio1">Whatsapp:</span>{" "}
                            <span className="bio2">Available</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            className="bio-email text-center p-3 bio"
                            data-aos="fade-right"
                        >
                            <span className="bio1">Email:</span>{" "}
                            <span className="bio2">
                                kamrulhasun5734@gmail.com
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="bio-telegram text-center p-3 bio mt-2"
                            data-aos="fade-left"
                        >
                            <span className="bio1">Telegram:</span>{" "}
                            <span className="bio2">Available</span>
                        </div>
                    </Col>

                    <Col>
                        <div
                            className="bio-telegram text-center p-3 bio mt-2"
                            data-aos="fade-left"
                        >
                            <span className="bio1">Department:</span>{" "}
                            <span className="bio2">CSE</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            className="bio-telegram text-center p-3 bio mt-2"
                            data-aos="fade-left"
                        >
                            <span className="bio1">institute:</span>{" "}
                            <span className="bio2">
                                Shanto-Mariam University of Creative Technology
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Biography;
