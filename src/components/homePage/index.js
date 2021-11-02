import React from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Results from "./Results";
import SearchOptions from "./SearchOptions";
import ResultsHeader from "./ResultsHeader";

const HomepageComponent = () => {

    return (
        <TransitionWrapper>
            <SearchOptions />
            <ResultsHeader />
            <Results />
        </TransitionWrapper>
    );
}

export default HomepageComponent