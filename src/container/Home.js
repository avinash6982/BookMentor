import React from "react";
import { useQuery } from "react-query";

import { getMentors, getUser } from "../api/MasterDataService";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import HomepageComponent from "../components/homePage";

const Home = () => {

    const { status } = useQuery("mentors", getMentors)
    useQuery("userData", getUser)

    return (
        <LayoutWrapper>
            <HomepageComponent status={status} />
        </LayoutWrapper>
    );
}

export default Home