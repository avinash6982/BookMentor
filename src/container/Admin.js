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

    const addUser = data => console.log(data)

    useEffect(() => {
        fetchMentors()
        fetchCategories()
    }, [])

    return (
        <LayoutWrapper>
            <AdminComponent
                addUser={addUser}
                mentors={mentors}
                categories={categories} />
        </LayoutWrapper>
    );
}

export default Admin