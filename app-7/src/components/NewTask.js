import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super();

        this.state={
            userInput: ""
        }
    }
    
    changeInput = (x) =>{
        this.setState({userInput: x})
        console.log(this.state.userInput)
    }
    
    handleClick = () =>{

        this.props.add(this.state.userInput)
        this.setState({userInput: ""})
    }

    render(){
        return(
            <div>
            <input
                value={this.state.userInput}
                placeholder="Enter new task..."
                onChange={(event) => {this.changeInput(event.target.value)}}
            ></input>
            <button
                onClick={this.handleClick}
            >Add</button>
            </div>
        )
    }
}


export default NewTask;