import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./PortfolioComponents/Home/Home";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Button,
} from "react-bootstrap";
import AboutMe from "./PortfolioComponents/AboutMe/AboutMe";
import Projects from "./PortfolioComponents/Projects/Projects";
import ContactMe from "./PortfolioComponents/ContactMe/ContactMe";
import Project1 from "./PortfolioComponents/Project1/Project1";
import Project2 from "./PortfolioComponents/Project2/Project2";
import Blogs from "./PortfolioComponents/Blogs/Blogs";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar expand="lg" sticky="top" bg="light">
                    <Container>
                        <Navbar.Brand href="#">
                            <Link to="/home" className="logo">
                                <div className="shake-opacity">
                                    <span className="k">K</span>AMRUL
                                </div>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="m-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                            >
                                <Link to="/home" className="links">
                                    Home
                                </Link>
                                <Link to="/about" className="links">
                                    About Me
                                </Link>

                                <Link to="/blogs" className="links">
                                    Blogs
                                </Link>

                                <Link to="/project" className="links">
                                    Projects
                                </Link>
                                <Link to="/contact" className="links">
                                    Contact Me
                                </Link>
                            </Nav>
                            <Form className="d-flex get-btn">
                                <a
                                    href="https://docs.google.com/document/d/17UlWthqPxsxEiCwRQzIlnAhHg7xtGx1NrbdFzvCscdk/edit"
                                    download="Kamrul Resume"
                                >
                                    <Button variant="outline-success">
                                        Get Resume
                                    </Button>
                                </a>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="about" element={<AboutMe />}></Route>
                    <Route path="project" element={<Projects />}></Route>
                    <Route path="contact" element={<ContactMe />}></Route>
                    <Route path="project1" element={<Project1 />}></Route>
                    <Route path="project2" element={<Project2 />}></Route>
                    <Route path="blogs" element={<Blogs />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
