import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./project2.css";
import NormalUser from "../../normal-user-page.png";
import Explore from "../../explore-page.png";
import PlaceOrder from "../../placeorder-page.png";
import AdminPanal from "../../admin-panale.png";
import ManageOrder from "../../manageorder-page.png";
const Project2 = () => {
    return (
        <div>
            <Container>
                <Card style={{ width: "100%", marginTop: "100px" }}>
                    <Card.Img variant="top" src={NormalUser} />
                    <Card.Body>
                        <Card.Title>
                            1.) This figure shown, when a normal user logged in,
                            he/she can access Home, Explore, and dashboard. In
                            the dashboard, normal user found three options named
                            My-Orders, Pay-Bill, and Orders reviews.{" "}
                        </Card.Title>
                        <Card.Title>
                            2.) In My-Orders page, user can see his/her all
                            ordered orders.{" "}
                        </Card.Title>
                        <Card.Title>
                            3.) Pay-Bill page is made of pay the amount of
                            billing for the specific orders.{" "}
                        </Card.Title>

                        <Card.Title>
                            4.) Our Review page is maintained for our products
                            reviews collections.{" "}
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: "100%", marginTop: "100px" }}>
                    <Card.Img variant="top" src={Explore} />
                    <Card.Body>
                        <Card.Title>
                            1.) In Explore page, there are some products with
                            their details, price,and phurchase now option. There
                            are also a review option to review a product.
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: "100%", marginTop: "100px" }}>
                    <Card.Img variant="top" src={PlaceOrder} />
                    <Card.Body>
                        <Card.Title>
                            1.) After pressing, pharcse button, then a modal
                            open with clients's details and products highlight
                            with it's price.
                        </Card.Title>

                        <Card.Title>
                            2.) After pressing, PlaceOrder button, this product
                            is registered for selling.
                        </Card.Title>

                        <Card.Title>
                            3.) Order can see a client in My Order page. Admin
                            see all orders in Manage All Orders with the user
                            name.
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: "100%", marginTop: "100px" }}>
                    <Card.Img variant="top" src={AdminPanal} />
                    <Card.Body>
                        <Card.Title>
                            1.) In he admin panale, an admin can access Manage
                            all orders, Manage all products, Make admin, and Add
                            a new Products.
                        </Card.Title>

                        <Card.Title>
                            2.) Manage All Orders page has all the orders of
                            every clients.
                        </Card.Title>

                        <Card.Title>
                            3.) Manage All Products page has all the products
                            where an admin can delete a product or more.
                        </Card.Title>

                        <Card.Title>
                            4.) Make admin page, an admin can make a person as
                            an admin role.
                        </Card.Title>

                        <Card.Title>
                            5.) An admin can add a new Product if he/she want.
                        </Card.Title>
                    </Card.Body>
                </Card>

                <Card
                    style={{
                        width: "100%",
                        marginTop: "100px",
                        marginBottom: "100px",
                    }}
                >
                    <Card.Img variant="top" src={ManageOrder} />
                    <Card.Body>
                        <Card.Title>
                            1.) In Manage all orders page, the order description
                            shown here according to the user.
                        </Card.Title>

                        <Card.Title>
                            2.) In an order, here are also price, user name, a
                            delete option and a update status functionality.
                        </Card.Title>

                        <Card.Title>
                            3.) In the update section, here an admin can change
                            the update status of an order when payment is
                            completed.
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Project2;
