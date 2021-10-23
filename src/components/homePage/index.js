import React from "react";
import ContentWrapper from "../../common/wrapper/ContentWrapper";
import Results from "./Results";
import SearchOptions from "./SearchOptions";

const HomepageComponent = () => {

    return (<>
        <ContentWrapper>
            <SearchOptions />
            <Results />
        </ContentWrapper>
    </>);
}

export default HomepageComponent