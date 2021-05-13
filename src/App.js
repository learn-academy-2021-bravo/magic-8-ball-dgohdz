import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ACTION ITEM: Add possible Magic8 Ball answers to the array
      answerArray: ["Here is an answer"],
      selectedAnswer: ""
    }
  }

  handleSubmit = () => {
    const { answerArray } = this.state
    // ACTION ITEM: Your code here!!
    // ACTION ITEM: Update the answerArray selection
    this.setState({ selectedAnswer: answerArray[0] })
  }

  render(){
    return (
      <>
        <h1>Magic 8 Ball</h1>
        <input
          className="inputBox"
          type="text"
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p>{ this.state.selectedAnswer }</p>
      </>
    )
  }
}

export default App
