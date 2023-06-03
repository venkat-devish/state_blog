import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"

export type PostsState = {
    id: string,
    title: string,
    content: string
}

type AddPostPayloadType = {
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
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<PostsState>) => {
                console.log(action.payload)
                state.push(action.payload)
            },
            prepare: (title, content) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            },
        }

    }
})

export const { postAdded } = postsSlice.actions;
export const posts = (state: any) => state.posts;
export default postsSlice.reducer;