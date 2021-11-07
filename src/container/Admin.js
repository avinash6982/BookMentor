import React, { useEffect, useState } from "react";

import AdminComponent from "../components/admin";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import { getMentors } from "../api/MasterDataService";

const Admin = () => {

    const [mentors, setMentors] = useState([])

    const fetchMentors = () =>
        getMentors()
            .then(res => setMentors({ ...res.data.data }))
            .catch(err => console.log(err))

    useEffect(() => {
        fetchMentors()
    }, [])

    return (
        <LayoutWrapper>
            <AdminComponent
                mentors={mentors} />
        </LayoutWrapper>
    );
}

export default Admin