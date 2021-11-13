import React from "react";
import { useMutation, useQuery } from "react-query";

import AdminComponent from "../components/admin";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import { deleteMentor, getCategories, getCourses, getMentors, postMentor } from "../api/MasterDataService";

const Admin = () => {

    useQuery("mentors", getMentors)
    useQuery("categories", getCategories)
    useQuery("courses", getCourses)

    // const removeMentor = useMutation(mentorId => deleteMentor(mentorId), { onSuccess: () => console.log("done") })
    const removeMentor = mentorId =>
        deleteMentor(mentorId)
            .then(res => res)
            .catch(err => console.log(err.response))

    const addMentor = useMutation(data => {
        let mentorData = new FormData()
        Object.keys(data)
            .map(key => mentorData.append(key, data[key]))
        return postMentor(mentorData)
    })

    // const addMentor = data => {

    //     let mentorData = new FormData()
    //     Object.keys(data)
    //         .map(key => mentorData.append(key, data[key]))
    //     return postMentor(mentorData)
    // }

    return (
        <LayoutWrapper>
            <AdminComponent
                removeMentor={removeMentor}
                addMentor={addMentor} />
        </LayoutWrapper>
    );
}

export default Admin