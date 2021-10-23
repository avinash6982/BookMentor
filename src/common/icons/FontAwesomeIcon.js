const FontAwesomeIcon = ({
    title,
    size,
    color,
    marginLeft,
    marginRight,
    onMouseEnter,
    onMouseOut
}) => {

    const styles = {
        fontSize: size || "25",
        color: color,
        marginLeft: marginLeft,
        marginRight: marginRight
    }

    return <i
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        className={`fa fa-${title}`}
        style={{ ...styles }}
        aria-hidden="true">
    </i>
}

export default FontAwesomeIcon