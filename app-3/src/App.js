import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      array: ["ice cream", "cookie", "pie", "cake"],
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(x){
    this.setState({userInput: x})
  }
  
  render() {
    // let filteredArr = this.state.array.filter((e,i,arr)=>{
    //     return <h2>{e.includes(this.state.userInput)}</h2>
    // })

    let listArr = this.state.array.filter((e,i,arr)=>{
      return e.includes(this.state.userInput)
    }).map(e=>{
      console.log(listArr)
      return <h2>{e}</h2>
    })
    

    console.log(listArr)

    return (

      

      <div className="App">
        <h1>App 3</h1>
        <input
         onChange={(event)=>{this.handleChange(event.target.value)}}
        ></input>
        {this.state.userInput}
        {listArr}
        {/* {filteredArr} */}
        {/* <h2 value={this.state.userInput === "" ? listArr : filteredArr}></h2> */}

      </div>
    );
  }
}

export default App;
