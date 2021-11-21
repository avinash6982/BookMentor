import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import AdminComponent from "../components/admin";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import { deleteMentor, getCategories, getCourses, getMentors, postMentor } from "../api/MasterDataService";

const Admin = () => {

    const queryClient = useQueryClient()
    useQuery("mentors", getMentors)
    useQuery("categories", getCategories)
    useQuery("courses", getCourses)

    // const removeMentor = data =>
    //     deleteMentor(data)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err.response))
    const removeMentor = useMutation(mentorId => deleteMentor(mentorId), { onSuccess: () => queryClient.invalidateQueries("mentors") })
    //TODO: Integrate updateMentor API
    const updateMentor = data => console.log(data)
    const addMentor = useMutation(data => {

        let mentorData = new FormData()
        Object.keys(data)
            .map(key => mentorData.append(key, data[key]))
        return postMentor(mentorData)
    }, { onSuccess: () => queryClient.invalidateQueries("mentors") })

    return (
        <LayoutWrapper>
            <AdminComponent
                removeMentor={removeMentor}
                updateMentor={updateMentor}
                addMentor={addMentor} />
        </LayoutWrapper>
    );
}

export default Admin