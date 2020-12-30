import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increament: (state) => {
            state.counter++;
        },
        decreament: (state) => {
            state.counter--;
        },
        reset: (state) => {
            state.counter = 0;
        }
    }
});

export const { increament, decreament, reset } = counterSlice.actions;
export default counterSlice.reducer;