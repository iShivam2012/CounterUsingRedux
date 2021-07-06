import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { actions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(actions.toggle());
  };

  const increaseHandler = () => {
    dispatch(actions.increase({ amount: 5 }));
  };

  const incrementHandler = () => {
    // dispatch({
    //   type: "INC",
    // });
    dispatch(actions.increment()); // this increment() method will execute and create an action object { type: 'increment'}
  };
  const decrementHandler = () => {
    // dispatch({
    //   type: "DEC",
    // });
    dispatch(actions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decrementHandler}>Decrement</button>
    </main>
  );
};

export default Counter;
