import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import classes from "./styles.module.css";

const NavbarComponent = ({
    onSignout
}) => {

    return (
        <Navbar className={classes.navbar} expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <b>FastClass</b>
                </Navbar.Brand>
                <Nav className="me-right">
                    <Nav.Link href="/contact-us">Contact us</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item className={classes.navDropItem} href="/profile">Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => onSignout()} className={classes.navDropItem} href="">
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent