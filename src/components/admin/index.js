import React from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

const AdminComponent = () => {

    return (
        <TransitionWrapper>
            <ResultsHeader />
            <Results />
        </TransitionWrapper>
    );
}

export default AdminComponent