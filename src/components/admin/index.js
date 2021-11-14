import React, { useState } from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import AddMentor from "./AddMentor";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

const AdminComponent = ({
    removeMentor,
    addMentor
}) => {

    const [addMentorVisible, setAddMentorVisible] = useState(false)

    if (addMentorVisible && addMentor.isSuccess)
        setAddMentorVisible(false)

    return (
        <TransitionWrapper>
            <AddMentor
                addMentor={addMentor}
                show={addMentorVisible}
                handleClose={() => setAddMentorVisible(false)} />
            <ResultsHeader
                setAddMentorVisible={setAddMentorVisible} />
            <Results removeMentor={removeMentor} />
        </TransitionWrapper>
    );
}

export default AdminComponent