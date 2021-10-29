import { useAuth } from "../AuthContext";
import NavbarComponent from "../components/navbar";

const Navbar = () => {

    const auth = useAuth()

    const onSignout = () =>
        auth.signout(() => console.log("logout success"))

    return (
        <NavbarComponent onSignout={onSignout} />
    )
}

export default Navbar