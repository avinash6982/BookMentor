import React, { useEffect, useState } from "react";
import { getMentors } from "../api/MasterDataService";

import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import HomepageComponent from "../components/homePage";

const Home = () => {

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
            <HomepageComponent mentors={mentors} />
        </LayoutWrapper>
    );
}

export default Home