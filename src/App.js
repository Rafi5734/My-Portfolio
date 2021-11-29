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
                                    Skills
                                </Link>
                                <Link to="/project" className="links">
                                    Projects
                                </Link>
                                <Link to="/contact" className="links">
                                    ContactMe
                                </Link>
                            </Nav>
                            <Form className="d-flex get-btn">
                                <a
                                    href="kamrul's Resume.pdf"
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;