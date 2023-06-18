import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  countIncremented = () => {
    const number = parseInt(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + number}))
  }

  evenOddStatus = () => {
    const {count} = this.state

    if (count % 2 === 0) {
      return <p className="count-para">Count is Even</p>
    }
    return <p className="count-para">Count is Odd</p>
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        {this.evenOddStatus()}
        <button
          className="button btn2"
          type="button"
          onClick={this.countIncremented}
        >
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
