import React from "react";
import { useQuery } from "react-query";

import { getMentors } from "../api/MasterDataService";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import HomepageComponent from "../components/homePage";

const fetchMentors = () =>
    getMentors()
        .then(res => res.data.data)

const Home = () => {

    const { status } = useQuery("mentors", fetchMentors)

    return (
        <LayoutWrapper>
            <HomepageComponent status={status} />
        </LayoutWrapper>
    );
}

export default Home