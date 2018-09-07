import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App 5</h1>
        <Image link={"https://github.com/DevMountain/react-drills/raw/assets/5.png"}/>
      </div>
    );
  }
}

export default App;
