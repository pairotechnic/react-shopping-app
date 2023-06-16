import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class LoginForm extends Component {

  

    constructor(props) {
      super(props)
    
      this.state = {
        username:'',
        password:'',
        isLoggedIn: false
    }
  }
  handlefn=(event1)=>{
      this.setState({
          username:event1.target.value
          
      })
  }
  handlefn1=(event2)=>{
      this.setState({

          password:event2.target.value
      })
  }


  

  handlesubmit=(event)=>{
      this.setState({
          isLoggedIn:true,
         //document.elementById("login").innerHTML='SUCCESS',
      });
      event.preventDefault()
  }

 
  render() {
    if(this.state.isLoggedIn===false)
    {
    return (
      <div className='login' >
        <form onSubmit={this.handlesubmit}>
      <div>
        
        <br></br>
        <header style={{fontFamily: 'Roboto'}}><h1>Welcome to Brilli Store</h1></header> 
        <br></br>
        <br></br>
        {/* <line> ...</line> */}
        {/* <h4>Welcome</h4> */}
          {/* <h3>Login Form</h3> */}
          
          {/* <label>Username </label> */}
        <input placeholder='Username' style={{'borderRadius':'5px'}} type="text" value={this.state.username} onChange={this.handlefn}/><br></br>
        <br></br>
        {/* <label>Password </label> */}
        <input placeholder='Password' style={{'borderRadius':'5px'}} type="password" value={this.state.password} onChange={this.handlefn1}/><br></br>
        <br></br>
        
        {/* <label> email </label> */}
  <input style={{'borderRadius':'5px'}} type ="email" placeholder="youremail@gmail.com" id="email" name="email"/>
      </div>
      <br></br>
     
      
      <Link to="/Masala">
      <button style={{backgroundColor: 'grey',
  color: 'black', 'borderRadius':'3px' }} type='submit'>LogIn</button><br></br>
      <br></br>
      </Link>

      <Link to="/Form">
      {/* <button> Don't have an account?  <a href="Form.js">SignUp</a></button> */}
      <p style={{color:'white'}}>Don't have an account?    <a href="Form.js" style={{backgroundColor: 'grey',
  color: 'black'}}>Sign Up</a></p><br></br><br></br>
      </Link>
     
     
      </form>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>Welcome user</h1>
      </div>
    )
  }
}

}
export default LoginForm