import React from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Results from "./Results";
import SearchOptions from "./SearchOptions";
import ResultsHeader from "./ResultsHeader";

const HomepageComponent = ({
    mentors
}) => {

    return (
        <TransitionWrapper>
            <SearchOptions />
            <ResultsHeader />
            <Results mentors={mentors} />
        </TransitionWrapper>
    );
}

export default HomepageComponent