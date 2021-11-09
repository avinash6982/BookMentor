import React, { useEffect, useState } from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import AddMentor from "./AddMentor";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

const AdminComponent = ({
    fetchMentors,
    addMentor,
    mentors,
    categories,
    courses
}) => {

    const [addMentorVisible, setAddMentorVisible] = useState(false)

    useEffect(() => fetchMentors(), [addMentorVisible])

    return (
        <TransitionWrapper>
            <AddMentor
                addMentor={addMentor}
                categories={categories}
                courses={courses}
                show={addMentorVisible}
                handleClose={() => setAddMentorVisible(false)} />
            <ResultsHeader
                setAddMentorVisible={setAddMentorVisible} />
            <Results mentors={mentors} />
        </TransitionWrapper>
    );
}

export default AdminComponent