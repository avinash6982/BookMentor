import { useHistory } from "react-router";
import { useAuth } from "../AuthContext";
import NavbarComponent from "../components/navbar";

const Navbar = () => {

    const auth = useAuth()
    const history = useHistory()

    const onSignout = () =>
        auth.signout(() => console.log("unda"))

    return (
        <NavbarComponent onSignout={onSignout} />
    )
}

export default Navbar