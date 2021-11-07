import React, { useState } from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import AddMentor from "./AddMentor";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

const AdminComponent = ({
    mentors
}) => {

    const [addMentorVisible, setAddMentorVisible] = useState(false)

    return (
        <TransitionWrapper>
            <AddMentor
                show={addMentorVisible}
                handleClose={() => setAddMentorVisible(false)} />
            <ResultsHeader
                setAddMentorVisible={setAddMentorVisible} />
            <Results mentors={mentors} />
        </TransitionWrapper>
    );
}

export default AdminComponent