import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  count: 0,
  visible: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    increase(state, action) {
      state.count = state.count + action.payload;
    },

    toggle(state) {
      state.visible = !state.visible;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
