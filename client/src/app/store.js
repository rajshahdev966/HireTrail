import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/auth/state/AuthSlice";



const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default store;