// Write your code here
import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {min: 0, sec: 0}

  onStart = () => {
    this.secondId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.secondId)
  }

  tick = () => {
    this.setState(prevState => ({sec: prevState.sec + 1}))
  }

  onReset = () => {
    clearInterval(this.secondId)
    this.setState({min: 0, sec: 0})
  }

  render() {
    const {min, sec} = this.state
    const inMinute = Math.floor(sec / 60)
    const inSecond = Math.floor(sec % 60)
    const minute = inMinute > 9 ? inMinute : `0${inMinute}`
    const second = inSecond > 9 ? inSecond : `0${inSecond}`
    return (
      <div className="total-bg">
        <div className="card">
          <h1 className="head">Stopwatch</h1>
          <div className="inner-card">
            <div className="clock">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <span>Timer</span>
            </div>
            <h1 className="time">
              {minute}:{second}
            </h1>
            <div className="clock">
              <button className="btn btn-1" onClick={this.onStart}>
                Start
              </button>
              <button className="btn btn-2" onClick={this.onStop}>
                Stop
              </button>
              <button className="btn btn-3" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
