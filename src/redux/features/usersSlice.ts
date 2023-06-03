import { createSlice } from '@reduxjs/toolkit'

type UsersStateType = {
    id: string,
    name: string
}

const initialState: UsersStateType[] = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const users = (state: any) => state.users;
export default usersSlice.reducer;