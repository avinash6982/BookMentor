import React from "react";
import { useQuery } from "react-query";
import { getBookings } from "../api/MasterDataService";

import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import BookingsComponent from "../components/bookings";

export default function Bookings() {

    const {status} = useQuery("bookings", getBookings )

    return (
        <LayoutWrapper>
            <BookingsComponent />
        </LayoutWrapper>
    );
}