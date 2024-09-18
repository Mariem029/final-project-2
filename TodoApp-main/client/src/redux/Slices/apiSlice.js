import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"




export const API_URI = "http://localhost:5000/api";

const baseQuery = fetchBaseQuery({baseUrl: API_URI })


export const apiSlice = createApi({
    baseQuery,
    endpoints: (builder)=>({}),
});
