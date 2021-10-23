import { Navbar, Container, Nav } from "react-bootstrap";
import FontAwesomeIcon from "../../common/icons/FontAwesomeIcon";

import classes from "./styles.module.css";

const NavbarComponent = ({
    onSignout,
    auth,
}) => {

    return (
        <Navbar className={classes.navbar} expand="lg" variant="dark">
            <Container className={classes.navbarContainer}>
                <Navbar.Brand href="/">TuteNext</Navbar.Brand>
                <Nav>
                    {
                        auth &&
                        <Nav.Link onClick={() => onSignout()} href="">
                            <FontAwesomeIcon title="sign-out" size={25} />
                        </Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent