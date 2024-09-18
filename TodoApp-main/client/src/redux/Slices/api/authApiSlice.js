
import { API_URI, apiSlice } from "../apiSlice";



export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) =>({
     method:"POST",
     url:`${API_URI}/users/login`,
     body: data,
     credentials: "include"
    })
    }),
   
    register: builder.mutation({
      query: (data) => ({
        url: `${API_URI}/users/register`,
        method: "POST",
        body: data,
        credentials: "include",
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
