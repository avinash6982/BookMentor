const FontAwesomeIcon = ({
    title,
    size,
    color,
    marginLeft,
    marginRight,
    onMouseEnter,
    onMouseOut,
    onClick
}) => {

    const styles = {
        fontSize: size || "25",
        color: color,
        marginLeft: marginLeft,
        marginRight: marginRight,
        zIndex: 99
    }

    return <i
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
        className={`fa fa-${title}`}
        style={{ ...styles }}
        aria-hidden="true">
    </i>
}

export default FontAwesomeIcon