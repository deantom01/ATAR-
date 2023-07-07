import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';


class TimerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: 0,
      elapsed_time: 0,
      is_running: false
    };
  }

  startTimer = () => {
    if (!this.state.is_running) {
      this.setState({
        is_running: true,
        start_time: Date.now()
      });
      this.timer = setInterval(this.updateTimer, 100);
    }
  };

  stopTimer = () => {
    if (this.state.is_running) {
      clearInterval(this.timer);
      this.setState({
        is_running: false
      });
    }
  };

  updateTimer = () => {
    if (this.state.is_running) {
      const elapsed_time = (Date.now() - this.state.start_time) / 1000;
      this.setState({
        elapsed_time
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { elapsed_time } = this.state;
    const current_time = new Date().toLocaleTimeString();

    return (
      <div>
        <label>Current Time: {current_time}</label>
        <br />
        <label>Elapsed Time: {elapsed_time.toFixed(2)} seconds</label>
        <br />
        <button className='kaftor' onClick={this.startTimer}><FontAwesomeIcon icon={faPlay} /></button> 
        <button className='kaftor' onClick={this.stopTimer}><FontAwesomeIcon icon={faPause} /></button> 
      </div>
    );
  }
}

export default TimerApp;
