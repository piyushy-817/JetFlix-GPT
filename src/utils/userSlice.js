import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "users",
    initialState : null,
    reducers:{
        addUser : (state , action)=>{
            return action.payload
        },
        removeUser : ()=>{
                return null
        }
    }
})

export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;