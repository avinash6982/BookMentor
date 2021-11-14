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

    const [scheduleMenu, setScheduleMenu] = useState({
        show: false,
        mentor: {}
    })

    return (
        <TransitionWrapper>
            <Schedule
                handleClose={() => setScheduleMenu({ show: false, mentor: {} })}
                scheduleMenu={scheduleMenu} />
            <SearchOptions />
            <ResultsHeader />
            <DataFetchWrapper status={status}>
                <Results openBookingMenu={setScheduleMenu} />
            </DataFetchWrapper>
        </TransitionWrapper>
    );
}

export default HomepageComponent