import React from "react";
import { mentors } from "../api/MasterDataService";

import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import HomepageComponent from "../components/homePage";

const Home = () => {

    mentors()
        .then(res => console.log(res))
        .catch(err => console.log(err.respose))

    return (
        <LayoutWrapper>
            <HomepageComponent />
        </LayoutWrapper>
    );
}

export default Home