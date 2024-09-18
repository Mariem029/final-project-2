import { API_URI, apiSlice } from "../apiSlice";



 const boardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createBoard: builder.mutation({
      query: (data) =>({
     method:"POST",
     url:`${API_URI}/boards`,
     body: data,
     credentials: "include",
    })
    }),
   
    getBoards: builder.query({
      query: (userId) => ({
        url: `${API_URI}/boards/${userId}`,
        method: "GET",
        credentials: "include",
      })
    }),

    updateBoard: builder.mutation({
      query: (data,id) => ({
        method: "PUT",
        url: `${API_URI}/boards/${id}`,
        body: data,
        credentials: "include",
      })
    }),
    deleteBoard: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `${API_URI}/boards/${id}`,
        credentials: "include",
      })
    }),
  })
});

export const { useCreateBoardMutation , useGetBoardsQuery , useUpdateBoardMutation, useDeleteBoardMutation} = boardApiSlice;
export default boardApiSlice
