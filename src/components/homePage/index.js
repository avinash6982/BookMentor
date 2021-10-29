import React from "react";
import ContentWrapper from "../../common/wrapper/ContentWrapper";
import Footer from "./Footer";
import Results from "./Results";
import SearchOptions from "./SearchOptions";
import ResultsHeader from "./ResultsHeader";

const HomepageComponent = () => {

    return (<>
        <ContentWrapper>
            <SearchOptions />
            <ResultsHeader />
            <Results />
            <Footer />
        </ContentWrapper>
    </>);
}

export default HomepageComponent