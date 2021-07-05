import { createStore } from "redux";

const counterReducer = (state = { counter: 0, show: true }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }

  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.payload.amount,
      show: state.show,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      show: !state.show,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
