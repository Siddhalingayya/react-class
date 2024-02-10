import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
    };
  }

  increment() {
    this.setState(
      {
        Count: this.state.Count + 1,
      },
      () => {
        console.log("callback value", this.state.Count);
      }
    );
    console.log(this.state.Count);
  }

  decrement() {
    this.setState(
      {
        Count: this.state.Count - 1,
      },
      () => {
        console.log("callback value", this.state.Count);
      }
    );
    console.log(this.state.Count);
  }

  render() {
    return (
      <div className="messageblock4">
        <div>Count : {this.state.Count}</div>
        <button onClick={() => this.increment()} className="btn2">
          Increment
        </button>
        <button onClick={() => this.decrement()} className="btn">
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
