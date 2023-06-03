import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { sub } from "date-fns"

export type PostsState = {
    id: string,
    title: string,
    content: string,
    user?: string,
    date: string
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
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString()
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
            prepare: (title, content, user) => {
                const id = nanoid();
                const date = new Date().toISOString();
                return {
                    payload: {
                        id,
                        title,
                        content,
                        user,
                        date
                    }
                }
            },
        }

    }
})

export const { postAdded } = postsSlice.actions;
export const posts = (state: any) => state.posts;
export const user = (state: any) => state.posts.user;
export default postsSlice.reducer;