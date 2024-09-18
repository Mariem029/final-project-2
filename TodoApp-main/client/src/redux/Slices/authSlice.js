import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    user: localStorage.getItem("User")
      ? JSON.parse(localStorage.getItem('User'))
      :null
  };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setInfo : (state, action)=>{
  
            state.user =action.payload;
            localStorage.setItem("User", JSON.stringify(action.payload));

        },
       Logout: (state)=>{
            state.user =null;
            localStorage.removeItem("User");
            
        }
     }
 });


export const { setInfo, Logout,  } = authSlice.actions;
export default authSlice;