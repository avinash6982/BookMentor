import React, { useState } from "react";

import TransitionWrapper from "../../common/wrapper/TransitionWrapper";
import { updateAdminDataResolver } from "../../services/DataResolver";
import AddMentor from "./AddMentor";
import EditMentor from "./EditMentor";
import Results from "./Results";
import ResultsHeader from "./ResultsHeader";

const AdminComponent = ({
    removeMentor,
    updateMentor,
    addMentor
}) => {

    const [filterText, setFilterText] = useState("")
    const [addMentorVisible, setAddMentorVisible] = useState(false)
    const [editMode, setEditMode] = useState({
        mentorDetails: "",
        show: false
    })

    const toggleEditMode = (showState, mentorDetails) =>
        setEditMode({
            mentorDetails: mentorDetails,
            show: showState
        })

    if (addMentorVisible && addMentor.isSuccess) {

        addMentor.reset()
        setAddMentorVisible(false)
    }

    return (
        <TransitionWrapper>
            <AddMentor
                addMentor={addMentor}
                show={addMentorVisible}
                handleClose={() => setAddMentorVisible(false)} />
            <EditMentor
                data={editMode.mentorDetails}
                updateMentor={data => updateMentor(updateAdminDataResolver(data))}
                show={editMode.show}
                handleClose={() => toggleEditMode(false)} />
            <ResultsHeader
                setFilterText={setFilterText}
                setAddMentorVisible={setAddMentorVisible} />
            <Results
                filterText={filterText}
                editMentor={toggleEditMode}
                removeMentor={removeMentor} />
        </TransitionWrapper>
    );
}

export default AdminComponent