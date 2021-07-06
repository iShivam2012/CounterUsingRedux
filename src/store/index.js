// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0, show: true }, action) => {
//   if (action.type === "INC") {
//     return {
//       counter: state.counter + 1,
//       show: state.show,
//     };
//   }

//   if (action.type === "DEC") {
//     return {
//       counter: state.counter - 1,
//       show: state.show,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.payload.amount,
//       show: state.show,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       show: !state.show,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  show: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggle(state) {
      state.show = !state.show;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const actions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
