import React, { Component } from 'react'
// import Login from './login'

export class signup extends Component {

    constructor(props){
        super(props)
        this.state = {
            fname : '',
            lname : '',
            email : '',
            password : '',
            repassword : '',
            isSubmitted : false
        }
    }

    handleFname = (event) => {
        this.setState ({
            fname:event.target.value
        })
    }

    handleLname = (event) => {
        this.setState ({
            lname:event.target.value
        })
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

    handleRepassword = (event) => {
        this.setState ({
            repassword:event.target.value
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

    // let login_bool = false;
    return (
        <div>
            <form onSubmit = {this.handleSubmit} >
                <div class = "InputArea">
                        <h2>Signup Page</h2><br/>
                        First Name : <input type="text" className = "textarea" value = {this.state.fname} onChange = {this.handleFname}></input><br></br><br></br>
                        Last Name : <input type="text" className = "textarea" value = {this.state.lname} onChange = {this.handleLname}></input><br></br><br></br>
                        Email : <input type="text" className = "textarea" value = {this.state.email} onChange = {this.handleEmail}></input><br></br><br></br>
                        Password : <input type="password" className = "textarea" value = {this.state.password} onChange = {this.handlePassword}></input><br></br><br></br>
                        Retye Password : <input type="password" className = "textarea" value = {this.state.repassword} onChange = {this.handleRepassword}></input><br></br><br></br>
                        Already a user? 
                        {/* <a onClick = {functionLogin}> */}
                            Login!
                            {/* </a> */}
                            <br></br><br></br>
                        {/* <button onClick = {() => login_bool=true}> Login!</button> */}
                        {/* {login_bool && <Login />} */}
                        <button className = "submitButton">Submit</button><br></br>
                </div>
        </form>
        </div>
        
    )
  }
}

export default signup

