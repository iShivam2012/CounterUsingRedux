import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  increaseHandler() {
    this.props.increase();
  }

  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.show && (
          <div className={classes.value}>{this.props.counter}</div>
        )}
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.increaseHandler.bind(this)}>Increase By</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    show: state.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" }),
    increase: () => dispatch({ type: "INCREASE", payload: { amount: 5 } }),
    toggle: () => dispatch({ type: "TOGGLE" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
