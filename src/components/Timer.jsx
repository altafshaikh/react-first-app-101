import { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      title: "Timer App",
      isTimerOn: false,
    };
  }

  startTimer = (event) => {
    if (!this.state.isTimerOn) {
      let interval = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
      this.setState({ interval: interval, isTimerOn: true });
    }
  };

  stopTimer = (event) => {
    if (this.state.isTimerOn) {
      clearTimeout(this.state.interval);
      this.setState({ interval: null, isTimerOn: false });
    }
  };

  resetTimer = (event) => {
    clearTimeout(this.state.interval);
    this.setState({ interval: null, isTimerOn: false, seconds: 0 });
  };

  render() {
    let hours = Math.floor(this.state.seconds / 3600);
    let minutes = Math.floor((this.state.seconds % 3600) / 60);
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>
          {hours} : {minutes} : {this.state.seconds}
        </p>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
