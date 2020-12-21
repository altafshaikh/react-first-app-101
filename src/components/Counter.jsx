import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      title: "Counter App",
    };
    this.increamentCount = this.increamentCount.bind(this);
    this.decreamentCount = this.decreamentCount.bind(this);
  }

  increamentCount(event) {
    this.setState({ count: this.state.count + 1 });
  }
  decreamentCount(event) {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>Counter Value = {this.state.count}</p>
        <button onClick={this.increamentCount}>+</button>
        <button onClick={this.decreamentCount}>-</button>
      </div>
    );
  }
}

export default Counter;
