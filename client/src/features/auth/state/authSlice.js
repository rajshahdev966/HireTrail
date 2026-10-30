import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        email: null
    },
    reducers: {
        addAuth : (state, action)=> {
            state.accessToken = action.payload.accessToken;
            state.email = action.payload.email;
        },
        removeAuth: (state)=> {
            state.accessToken = null;
            state.email = null;
        }
    }
});

export const {addAuth, removeAuth} = authSlice.actions;
const authReducer = authSlice.reducer

export default authReducer;