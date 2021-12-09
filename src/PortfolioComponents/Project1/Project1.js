import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./project1.css";
import Image1 from "../../before-img-1.png";
import Image2 from "../../google-sign-in-2.png";
import Image3 from "../../after-log-in-3.png";
const Project1 = () => {
    return (
        <div>
            <h1>
                <Container>
                    <Card style={{ width: "100%", marginTop: "100px" }}>
                        <Card.Img variant="top" src={Image1} />
                        <Card.Body>
                            <Card.Title>
                                {" "}
                                1.) This figure illustrates that there are three
                                routes available before logging into this app's
                                account: Home, Services, and About Us.
                            </Card.Title>

                            <Card.Title>
                                {" "}
                                2.) All schemas with information and costs are
                                displayed in the services routes. Before buying
                                or booking a schema, the user will be led to the
                                login page, which is the Google sign in page.
                            </Card.Title>

                            <Card.Title>
                                {" "}
                                3.) In addition, the navbar sign in button may
                                be used to log in.
                            </Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "100%", marginTop: "100px" }}>
                        <Card.Img variant="top" src={Image2} />
                        <Card.Body>
                            <Card.Title>
                                1.) This Firebase Authentication Provider built
                                this Google Sign-in function.
                            </Card.Title>
                            <Card.Title>
                                2.) When user click the Google Sign-in button, a
                                pop-up modal will display, allowing you to
                                choose your account for login.
                            </Card.Title>
                            <Card.Title>
                                3.) After logging in successfully, the user will
                                see more options, as well as the user's name in
                                the navbar and a signout button for logging out
                                of the account.
                            </Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "100%", marginTop: "100px" }}>
                        <Card.Img variant="top" src={Image3} />
                        <Card.Body>
                            <Card.Title>
                                1.) This picture is the after log in in the
                                website. There are more three routes are also
                                created named Myorder, Manage Orders, and Add a
                                service when client logged successfully in.{" "}
                            </Card.Title>

                            <Card.Title>
                                2.) My order rotes maintain which orders are
                                made by a client.{" "}
                            </Card.Title>

                            <Card.Title>
                                3.) Manage Orders has how many orders a client
                                placed and client can delete an order if he
                                want.{" "}
                            </Card.Title>

                            <Card.Title>
                                4.) Add a services stand for add a new schema
                                for clients with valid details for a schema.{" "}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Container>
            </h1>
        </div>
    );
};

export default Project1;
