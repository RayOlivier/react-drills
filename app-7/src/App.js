import React, { Component } from 'react';
import './App.css';
import NewTask from './components/NewTask';
import List from './components/List';

class App extends Component {
  constructor(){
    super();

    this.state={
      taskArray: ["hi"]
    }
    this.addTask = this.addTask.bind(this)
  }
 
  addTask(task){
    
    const {taskArray} = this.state;
    console.log(task)
    
    let fullArr = []
    fullArr = taskArray.slice()//.push(task) //WHYYY does this break???
    fullArr.push(task) //but this doesnt??????????
    //APPARENTLY push returns an integer fml
    console.log(fullArr)
    this.setState({taskArray: fullArr})
    console.log(taskArray)

    // this.setState({ taskArray: [ ...this.state.taskArray, task ] });

  }
  
 
  render() {
    
    
    return (
      <div className="App">
        <h1>To do list:</h1>
        <NewTask add={this.addTask} />
        <List arr={this.state.taskArray} />
        
      </div>
    );
  }
}

export default App;
