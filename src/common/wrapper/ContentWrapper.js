import React from "react";

import Fade from "./Fade";

const ContentWrapper = props =>
    <Fade show={true}>
        {props.children}
    </Fade>

export default ContentWrapper