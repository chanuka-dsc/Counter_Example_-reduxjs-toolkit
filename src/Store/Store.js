import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

// without redux toolkit

// const counterReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case "decrement":
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case "increase_5":
//       return {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };

//     case "toggle":
//       return { counter: state.counter, showCounter: !state.showCounter };

//     default:
//       return state;
//   }
// };
