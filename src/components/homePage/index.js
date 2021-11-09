import React from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Results from "./Results";
import SearchOptions from "./SearchOptions";
import ResultsHeader from "./ResultsHeader";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";

const HomepageComponent = ({
    status,
    data
}) => {

    return (
        <TransitionWrapper>
            <SearchOptions />
            <ResultsHeader />
            <DataFetchWrapper status={status}>
                <Results mentors={data} />
            </DataFetchWrapper>
        </TransitionWrapper>
    );
}

export default HomepageComponent