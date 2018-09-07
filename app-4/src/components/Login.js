import React, {Component} from 'react';


class Login extends Component{
    constructor(){
        super();

        this.state={
            usernameInput: "",
            passwordInput: "",
            buttonStatus: false
        }

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.toggleState = this.toggleState.bind(this);
    }
    
    changeUsername(x){
        this.setState({usernameInput: x})
        console.log(this.state.usernameInput)
    }
    changePassword(x){
        this.setState({passwordInput: x})
        console.log(this.state.passwordInput)
    }
    toggleState(){
        this.setState({buttonStatus: !this.state.buttonStatus}) //idk why i thought i needed this but whatever
        console.log(this.state.buttonStatus)
        alert(`Username: ${this.state.usernameInput} Password: ${this.state.passwordInput}`)
    }
    
    render(){

        return(
            <div>
                <h2>Login Component</h2>

                <input 
                    placeholder="Enter username"
                    onChange={(event)=>{this.changeUsername(event.target.value)}}
                ></input>
                <input 
                    placeholder="Enter password"
                    onChange={(event)=>{this.changePassword(event.target.value)}}
                ></input>
                <button
                    onClick={this.toggleState}
                >Login</button>
            </div>
        );
    }
}


export default Login;