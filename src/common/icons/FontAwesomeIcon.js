const FontAwesomeIcon = ({
    title,
    size,
    color,
    marginLeft,
    marginRight,
    onMouseEnter,
    onMouseOut,
    onClick,
    tooltip
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
        title={tooltip}
        aria-hidden="true">
    </i>
}

export default FontAwesomeIcon