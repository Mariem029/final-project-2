import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./Slices/boardsSlice";
import authSlice from "./Slices/authSlice";
import { apiSlice } from "./Slices/apiSlice";


const store = configureStore({
  reducer: {
   [apiSlice.reducerPath]: apiSlice.reducer,
    boards: boardsSlice.reducer,
    user: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware)=>
      getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
