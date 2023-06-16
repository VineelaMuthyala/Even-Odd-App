import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {peach: true, mario: false, bowser: false}

  peachStatus = () => {
    const {peach} = this.state
    if (peach === true) {
      return (
        <div className="image-button-container">
          <img
            className="image"
            alt="peach"
            src="https://qph.cf2.quoracdn.net/main-qimg-2bcde15195ad94d086aa7fb0fdd8a6f4-lq"
          />
          <button
            className="button"
            type="button"
            onClick={this.picturePeachStatus}
          >
            Save Peach
          </button>
        </div>
      )
    }
    return null
  }

  marioStatus = () => {
    const {mario} = this.state

    if (mario === true) {
      return (
        <div className="image-button-container">
          <img
            className="image"
            alt="mario"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawq74RwQAOFMXKczyGMNhg9PpYCs8CAkQ7A&usqp=CAU"
          />
          <button
            className="button"
            type="button"
            onClick={this.pictureMarioStatus}
          >
            Mario Attacks Bowser
          </button>
        </div>
      )
    }
    return null
  }

  bowserStatus = () => {
    const {bowser} = this.state
    if (bowser === true) {
      return (
        <div className="image-button-container">
          <img
            className="image"
            alt="bowser"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOynXo027tJClX_TSvGyG3ERWQZu1mEmrD-g&usqp=CAU"
          />
          <button
            className="button"
            type="button"
            onClick={this.pictureBowserStatus}
          >
            Princess Peach Saved
          </button>
        </div>
      )
    }
    return null
  }

  picturePeachStatus = () => {
    const {peach, mario} = this.state
    if (peach === true) {
      this.setState(prevState => ({
        peach: !prevState.peach,
        mario: !prevState.mario,
      }))
    }
    console.log(peach)
    console.log(mario)
  }

  pictureMarioStatus = () => {
    const {mario} = this.state
    if (mario === true) {
      this.setState(prevState => ({
        mario: !prevState.mario,
        bowser: !prevState.bowser,
      }))
    }
  }

  pictureBowserStatus = () => {
    const {bowser} = this.state
    if (bowser === true) {
      this.setState(prevState => ({
        bowser: !prevState.bowser,
        peach: !prevState.peach,
      }))
    }
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Super Mario</h1>
        {this.peachStatus()}
        {this.marioStatus()}
        {this.bowserStatus()}
      </div>
    )
  }
}
export default EvenOddApp
