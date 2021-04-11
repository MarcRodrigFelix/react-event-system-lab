import React, { Component } from 'react'

export default class Keypad extends Component {
  render() {

    handleKeyUp = () => {
      console.log('Entering password...')
    }

    return (
      <div>
        <input onKeyUp={this.handleKeyUp} type="password"></input>
      </div>
    )
  }
}
