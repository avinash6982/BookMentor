import React from "react";
import MentorComponent from "../components/mentor";
import ContentWrapper from "../common/wrapper/ContentWrapper";

export default function Mentor({ id }) {

    if (id)
        console.log(id)
    else
        console.log("no id found")

    return (
        <ContentWrapper>
            <MentorComponent />
        </ContentWrapper>
    );
}