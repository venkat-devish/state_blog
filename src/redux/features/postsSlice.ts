import { createSlice, nanoid, PayloadAction, current } from "@reduxjs/toolkit"
import { sub } from "date-fns"

type ReactionsType = {
    thumbsUp: number,
    wow: number,
    heart: number,
    rocket: number,
    coffee: number,
}

type PostPayLoadType = {
    postId: string,
    reactionName: string
}

export type PostsStateType = {
    id: string,
    title: string,
    content: string,
    user?: string,
    date: string,
    reactions: ReactionsType
}

const initialState: PostsStateType[] = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action: PayloadAction<PostsStateType>) => {
                state.push(action.payload)
            },
            prepare: (title, content, user) => {
                const id = nanoid();
                return {
                    payload: {
                        id,
                        title,
                        content,
                        user,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        }
                    }
                }
            },
        },
        reactionAdded: (state, { payload }) => {
            const { postId, reactionName }: PostPayLoadType = payload;
            const isExisting = state.find(post => post.id === postId)
            if (isExisting) {
                isExisting.reactions[reactionName as keyof ReactionsType]++;
            }
        }

    }
})

export const { postAdded, reactionAdded } = postsSlice.actions;
export const posts = (state: any) => state.posts;
export const user = (state: any) => state.posts.user;
export default postsSlice.reducer;