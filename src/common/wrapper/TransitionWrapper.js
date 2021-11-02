import React from "react";

import Fade from "./Fade";

const TransitionWrapper = props =>
    <Fade show={true}>
        {props.children}
    </Fade>

export default TransitionWrapper