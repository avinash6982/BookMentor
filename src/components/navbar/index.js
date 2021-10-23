import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import classes from "./styles.module.css";

const NavbarComponent = ({
    onSignout
}) => {

    return (
        <Navbar sticky="top" className={classes.navigationBar} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">FastClass</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <NavDropdown title="Account">
                            <NavDropdown.Item className={classes.navDropItem} href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => onSignout()} className={classes.navDropItem} href="">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent