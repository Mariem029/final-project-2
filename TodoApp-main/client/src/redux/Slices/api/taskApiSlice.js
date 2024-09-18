
import { API_URI, apiSlice } from "../apiSlice";



 const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    addTask: builder.mutation({
      query: (data) =>({
     method:"POST",
     url:`${API_URI}/tasks`,
     body: data,
     credentials: "include",
    })
    }),
   
    getTasks: builder.query({
      query: () => ({
        url: `${API_URI}/tasks/`,
        method: "GET",
        credentials: "include",
      })
    }),

    updateTask: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url: `${API_URI}/tasks/${data.id}`,
        body: data,
        credentials: "include",
      })
    }),
    deleteTask: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        url: `${API_URI}/tasks/${data.id}`,
        body: data,
        credentials: "include",
      })
    }),
  })
});

export const { useAddTaskMutation, useGetTasksQuery , useUpdateTaskMutation , useDeleteTaskMutation } = taskApiSlice;
export default taskApiSlice
