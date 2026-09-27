import { Component } from "react";
import { connect } from "react-redux";

import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    visible: state.counter.visible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(counterActions.increment()),
    increase: (amount) => dispatch(counterActions.increase(amount)),
    decrement: () => dispatch(counterActions.decrement()),
    toggle: () => dispatch(counterActions.toggle()),
  };
}

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  increaseHandler(amount) {
    this.props.increase(amount);
  }

  toggleCounterHandler() {
    this.props.toggle();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {this.props.visible && (
          <div className={classes.value}>{this.props.count}</div>
        )}
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={() => this.increaseHandler(5)}>Increase by 5</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
