import NavbarComponent from "../components/navbar";

const Navbar = ({
    setUser
}) => {

    const onSignout = () => setUser(null)

    return (
        <NavbarComponent onSignout={onSignout} />
    )
}

export default Navbar