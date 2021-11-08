import React, { useEffect, useState } from "react";

import AdminComponent from "../components/admin";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import { getCategories, getCourses, getMentors, postMentor } from "../api/MasterDataService";
import { useAuth } from "../AuthContext";
import { Redirect, useLocation } from "react-router";

const Admin = () => {

    const [mentors, setMentors] = useState([])
    const [categories, setCategories] = useState([])
    const [courses, setCourses] = useState({})

    const fetchMentors = () =>
        getMentors()
            .then(res => setMentors({ ...res.data.data }))
            .catch(err => console.log(err))

    const fetchCategories = () =>
        getCategories()
            .then(res => setCategories({ ...res.data.data }))
            .catch(err => console.log(err))

    const fetchCourses = () =>
        getCourses()
            .then(res => setCourses({ ...res.data.data }))
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
        fetchCourses()
    }, [])

    return (
        <LayoutWrapper>
            <AdminComponent
                fetchMentors={fetchMentors}
                addMentor={addMentor}
                mentors={mentors}
                categories={categories}
                courses={courses} />
        </LayoutWrapper>
    );
}

export default Admin