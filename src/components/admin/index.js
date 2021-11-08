import React, { useState } from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import AddMentor from "./AddMentor";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

const AdminComponent = ({
    addMentor,
    mentors,
    categories
}) => {

    const [addMentorVisible, setAddMentorVisible] = useState(false)

    return (
        <TransitionWrapper>
            <AddMentor
                addMentor={addMentor}
                categories={categories}
                show={addMentorVisible}
                handleClose={() => setAddMentorVisible(false)} />
            <ResultsHeader
                setAddMentorVisible={setAddMentorVisible} />
            <Results mentors={mentors} />
        </TransitionWrapper>
    );
}

export default AdminComponent