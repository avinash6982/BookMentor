import React from "react";

import MentorComponent from "../components/mentor";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";

export default function Mentor({ id }) {

    if (id)
        console.log(id)
    else
        console.log("no id found")

    return (
        <LayoutWrapper>
            <MentorComponent />
        </LayoutWrapper>
    );
}