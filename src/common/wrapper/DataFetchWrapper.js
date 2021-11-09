import { Spinner } from "react-bootstrap";
import FontAwesomeIcon from "../icons/FontAwesomeIcon";

const DataFetchWrapper = props =>
    <>
        {props.status === "loading" &&
            <Spinner animation="grow" variant="dark" />}
        {props.status === "error" &&
            <FontAwesomeIcon size={30} title="exclamation-triangle" color="#4d4d4d" />}
        {props.status === "success" && props.children}
    </>

export default DataFetchWrapper