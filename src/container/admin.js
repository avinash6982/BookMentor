import React from "react";

import AdminComponent from "../components/admin";
import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import { getCategories } from "../api/MasterDataService";

const Admin = () => {

    getCategories()
        .then(res => console.log(res))
        .catch(err => console.log(err.response))

    return (
        <LayoutWrapper>
            <AdminComponent />
        </LayoutWrapper>
    );
}

export default Admin