import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import newsReducer from "../features/newsSlice"

const store = configureStore({
    reducer: {
        auth:authReducer,
        news:newsReducer,
    }
    //devtools:false,
    //devtools:process.env.NODE_ENV !== "production",
})



export default store; 