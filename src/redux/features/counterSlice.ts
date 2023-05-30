import { createSlice } from "@reduxjs/toolkit";

type counterStateType = {
    count: number;
}

const initialState: counterStateType = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: counterStateType) => { state.count += 1; },
        decrement: (state: counterStateType) => { state.count -= 1 },
        incrementByValue: (state: counterStateType, action) => { state.count += action.payload },
    }
})

export const count = (state: any): number => state.counter.count;
export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;