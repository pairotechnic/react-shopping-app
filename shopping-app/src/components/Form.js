import React,{ useState,useEffect} from 'react';
import axios from "axios"
import { Link } from "react-router-dom";



export default function Form() {

    
      
    
    

// States for registration
const [firstname, setName] = useState('');
const [lastname, setName1] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [retypepassword, setPassword1] = useState('');

// function post(){
//     console.log("xyz")
//     axios({
//         method: 'post',
//         url: "http://localhost:3000/posts/",
//         data: {
//           firstName: `${firstname}`,
//           lastName: `${lastname}`
//         }
//       });
// }

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
};

const handleName1 = (e) => {
    setName1(e.target.value);
    setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
};

const handlePassword1 = (e) => {
    setPassword1(e.target.value);
    setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname === '' || email === '' || password === '') {
    setError(true);
    } else {
    setSubmitted(true);
    setError(false);
    }
};

// Showing success message
const successMessage = () => {
    return (
    <div
        className="success"
        style={{
        display: submitted ? '' : 'none',
        }}>
        <h1> Welcome,{firstname  + lastname} successfully registered!!</h1>
    </div>
    );
};

// Showing error message if error is true
const errorMessage = () => {
    return (
    <div
        className="error"
        style={{
        display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
    </div>
    );
};


const handleStore = (e) =>{
    e.preventDefault()

    axios.post('https://63898a64c5356b25a2022e0b.mockapi.io/Fakedata',{
        firstname,
        lastname,
        email
    })
    // alert(`The data is ${firstname} ${lastname} ${email}`)
    

}
return (

    

<div className="Form">
    <div style={{fontStyle: 'serif'}}>
        <br></br><h1><b>User Registration</b></h1>
    </div>
    <br></br>

    {/* Calling to the methods */}
    <div className="messages">
        {errorMessage()}
        {successMessage()}
    </div>

    <form onSubmit={<Link to="/Masala"></Link>}>
        {/* Labels and inputs for form data */}
        {/* <label className="label">First Name</label> */}
        <input placeholder="First Name" style={{'borderRadius':'5px'}} onChange={handleName} className="input"
        value={firstname} type="text" /> <br></br><br></br>

        {/* <label className="label">Last Name</label> */}
        <input placeholder='Last Name' style={{'borderRadius':'5px'}} onChange={handleName1} className="input"
        value={lastname} type="text" /> <br></br><br></br>

        {/* <label className="label">Email</label> */}
        <input placeholder='Email' style={{'borderRadius':'5px'}} onChange={handleEmail} className="input"
        value={email} type="email" /><br></br><br></br>

        {/* <label className="label">Password</label> */}
        <input placeholder='Password' style={{'borderRadius':'5px'}} onChange={handlePassword} className="input"
        value={password} type="password" /><br></br><br></br>

        {/* <label className="label">Retype Password</label> */}
        <input placeholder='Retype Password' style={{'borderRadius':'5px'}} onChange={handlePassword1} className="input"
        value={retypepassword} type="password" /><br></br><br></br>



    <button style={{backgroundColor:"darkgrey"}} className="btn" type="submit" onClick={handleStore}>
    <Link to="/Masala">
        SignIn
        </Link>
        </button>
        <br></br>
        <br></br>
        <p>Already a user? <a href="LoginForm" style={{backgroundColor:"white"}}>Login up</a></p><br></br><br></br>
    </form>
</div>
);
}
