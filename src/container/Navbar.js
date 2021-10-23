import NavbarComponent from "../components/navbar";

const Navbar = ({
    setUser,
    user
}) => {

    const onSignout = () => setUser(null)

    return (
        <NavbarComponent
            onSignout={onSignout}
            auth={user ? true : false} />
    )
}

export default Navbar