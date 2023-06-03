import { createSlice } from "@reduxjs/toolkit"

export type PostsState = {
    id: string,
    title: string,
    content: string
}

const initialState: PostsState[] = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export const posts = (state: any) => state.posts;
export default postsSlice.reducer;