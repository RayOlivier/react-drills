import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      array: ["ice cream", "cake", "cookie", "pie"]
    }

    // this.displayArray = this.displayArray.bind(this)
  }
  
  // displayArray(){
  //   let arr = this.state.array.slice();

  //   arr.forEach((e,i,arr)=>{
  //     return <div>{e}</div>
  //   })

  //   console.log(arr)

  //   this.setState({array: arr})
  // }
  
  render() {
    let newArr = this.state.array.map((e,i,arr)=>{
      return <h2>{e}</h2>
    })

    return (

      
      <div className="App">
       <h1>App 2</h1>
       {newArr}
      </div>
    );
  }
}

export default App;
