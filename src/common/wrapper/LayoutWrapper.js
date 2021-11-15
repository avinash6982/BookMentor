import React from "react";

const LayoutWrapper = props => {

    return (
        <div style={{ paddingBottom: "25rem" }}>
            {props.children}
        </div>
    );
}

export default LayoutWrapper