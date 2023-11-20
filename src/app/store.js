import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../features/user/userSlice";
import movieReducer from "../features/movies/movieSlice"
const store = configureStore({
    reducer: {
        user: userReducers,
        movie: movieReducer,
    }
})
export default store;