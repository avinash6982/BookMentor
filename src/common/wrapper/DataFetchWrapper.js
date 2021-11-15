import { Row, Spinner } from "react-bootstrap";
import FontAwesomeIcon from "../icons/FontAwesomeIcon";

const ElementContainer = props =>
    <Row style={{ display: "grid", placeItems: "center" }}>
        {props.children}
    </Row>

const DataFetchWrapper = props =>
    <>
        {props.status === "loading" &&
            <ElementContainer>
                <Spinner animation="grow" variant="dark" />
            </ElementContainer>}
        {props.status === "error" &&
            <ElementContainer>
                <FontAwesomeIcon size={30} title="exclamation-triangle" color="#4d4d4d" />
            </ElementContainer>}
        {props.status === "success" && props.children}
    </>

export default DataFetchWrapper