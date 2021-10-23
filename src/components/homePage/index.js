import React from "react";
import ContentWrapper from "../../common/wrapper/ContentWrapper";
import Footer from "./Footer";
import Results from "./Results";
import SearchOptions from "./SearchOptions";

const HomepageComponent = () => {

    return (<>
        <ContentWrapper>
            <SearchOptions />
            <Results />
            <Footer />
        </ContentWrapper>
    </>);
}

export default HomepageComponent