import React from 'react'
import { Link } from 'react-router-dom'

export default function LogOut() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Successfully LoggedOut</h1>
        <br></br>
        <br></br>
        <br></br>
      
            <p>Do you wan't to LogIn again?</p>
            <Link to="/LoginForm">
            <button type="button" >LogIn</button>
            </Link>
        
      
    </div>
  )
}
