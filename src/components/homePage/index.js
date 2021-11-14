import React, { useEffect, useState } from "react";
import { Alert, Collapse } from "react-bootstrap";

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

    const [alert, setAlert] = useState({
        show: false,
        text: "",
        variant: ""
    })

    const toggleAlert = state =>
        setAlert(previousState => ({
            ...previousState,
            show: state
        }))

    useEffect(() => alert.show && setTimeout(() => toggleAlert(false), 2000), [alert.show])

    return (
        <TransitionWrapper>
            <Schedule
                setAlert={setAlert}
                handleClose={() => setScheduleMenu({ show: false, mentor: {} })}
                scheduleMenu={scheduleMenu} />
            <Collapse in={alert.show}>
                <div style={{ paddingTop: "1rem" }}>
                    <Alert variant={alert.variant}>
                        {alert.text}
                    </Alert>
                </div>
            </Collapse>
            <SearchOptions />
            <ResultsHeader />
            <DataFetchWrapper status={status}>
                <Results openBookingMenu={setScheduleMenu} />
            </DataFetchWrapper>
        </TransitionWrapper>
    );
}

export default HomepageComponent