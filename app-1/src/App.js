import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(x){
    this.setState({userInput: x.target.value})
  }
  
  render() {
    return (
      <div className="App">
        <h1>App 1</h1>
        <input
        onChange={(event)=>{this.handleChange(event)}}></input>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
