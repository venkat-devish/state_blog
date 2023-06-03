import { createSlice } from "@reduxjs/toolkit";

type CounterType = {
    count: number;
}

const initialState: CounterType = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        }
    }
})

export const count = (state: any): number => state.counter.count;
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer