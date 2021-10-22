const FontAwesomeIcon = ({
    title,
    size,
    color,
    marginLeft,
    marginRight
}) => {

    const styles = {
        fontSize: size || "25",
        color: color,
        marginLeft: marginLeft,
        marginRight: marginRight
    }
    
    return <i className={`fa fa-${title}`} style={{ ...styles }} aria-hidden="true"></i>
}

export default FontAwesomeIcon