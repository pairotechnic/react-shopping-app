import React, { Component } from 'react'

export class login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            isSubmitted : false
        }
    }

    handleEmail = (event) => {
        this.setState ({
            email:event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState ({
            password:event.target.value
        })
    }

    handleSubmit = () =>{
        this.setState ({
            isSubmitted : true,
        })
    }

  render() {

    if(this.state.isSubmitted){
        return (<center>
            <div><h1>Registration<br/>Successful!</h1></div>
        </center>)
    }
    return (
        <div>
            <form onSubmit = {this.handleSubmit} >
                <div class = "InputArea">
                        <h2>Login Page</h2><br/>
                        Email : <input type="text" className = "textarea" value = {this.state.email} onChange = {this.handleEmail}></input><br></br><br></br>
                        Password : <input type="password" className = "textarea" value = {this.state.password} onChange = {this.handlePassword}></input><br></br><br></br>
                        Need an account? Sign up!<br></br><br></br>
                        <button className = "submitButton">Submit</button><br></br>
                </div>
        </form>
        </div>
        
    )
  }
}

export default login

