import React, { useState } from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import Results from "./Results";
import SearchOptions from "./SearchOptions";
import ResultsHeader from "./ResultsHeader";
import DataFetchWrapper from "../../common/wrapper/DataFetchWrapper";
import Schedule from "./Schedule";

const HomepageComponent = ({
    status
}) => {

    const [scheduleShow, setScheduleShow] = useState(false)

    return (
        <TransitionWrapper>
            <Schedule
                onSubmit={() => console.log("booking")}
                handleClose={() => setScheduleShow(false)}
                show={scheduleShow} />
            <SearchOptions />
            <ResultsHeader />
            <DataFetchWrapper status={status}>
                <Results openBookingMenu={() => setScheduleShow(true)} />
            </DataFetchWrapper>
        </TransitionWrapper>
    );
}

export default HomepageComponent