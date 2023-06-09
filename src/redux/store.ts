import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counterSlice"
import postsReducer from "./features/postsSlice"
import usersReducer from "./features/usersSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
})