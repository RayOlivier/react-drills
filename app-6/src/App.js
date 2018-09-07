import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super();

    this.state={
      taskArray: [],
      userInput: ""
    }


  }
  
  inputChange = (x) => {
    this.setState({userInput: x})
    console.log(this.state.userInput)
  }

  handleClick = () =>{
    const {taskArray, userInput} = this.state;
    let newArr = taskArray.slice();
    newArr.push(userInput)
    
    this.setState({taskArray: newArr, userInput: ""})

    // this.setState({userInput: ""})
    console.log(taskArray, userInput)
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input 
          placeholder="Enter new task"
          value={this.state.userInput}
          onChange={(event)=>{this.inputChange(event.target.value)}}
          ></input>
        <button
          onClick={this.handleClick}
        >Add</button>

        <Todo arr={this.state.taskArray} />


      </div>
    );
  }
}

export default App;
