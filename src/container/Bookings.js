import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getBookings } from "../api/MasterDataService";

import LayoutWrapper from "../common/wrapper/LayoutWrapper";
import BookingsComponent from "../components/bookings";

export default function Bookings() {

    const queryClient = useQueryClient()
    const userData = queryClient.getQueryData("userData")

    const fetchBookings = () =>
        getBookings('6192883fa3e1958a11085218')

    const { data, status } = useQuery("bookings", fetchBookings)

    console.log(data)

    return (
        <LayoutWrapper>
            <BookingsComponent status={status} data={data} />
        </LayoutWrapper>
    );
}