import React, { useEffect, useState } from "react";

import AdminComponent from "../components/admin";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import { getCategories, getMentors, postMentor } from "../api/MasterDataService";

const Admin = () => {

    const [mentors, setMentors] = useState([])
    const [categories, setCategories] = useState([])

    const fetchMentors = () =>
        getMentors()
            .then(res => setMentors({ ...res.data.data }))
            .catch(err => console.log(err))

    const fetchCategories = () =>
        getCategories()
            .then(res => setCategories({ ...res.data.data }))
            .catch(err => console.log(err))

    const addMentor = data => {

        let mentorData = new FormData()
        Object.keys(data)
            .map(key => mentorData.append(key, data[key]))
        return postMentor(mentorData)
    }

    useEffect(() => {
        fetchMentors()
        fetchCategories()
    }, [])

    return (
        <LayoutWrapper>
            <AdminComponent
                addMentor={addMentor}
                mentors={mentors}
                categories={categories} />
        </LayoutWrapper>
    );
}

export default Admin