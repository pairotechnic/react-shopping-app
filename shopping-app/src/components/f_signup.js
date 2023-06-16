import React, { useState } from 'react'

function F_signup() {

    const [details, setDetails] = useState({ // State
        fname : '',
        lname : '',
        email : '',
        password : '',
        repassword : '',
        isSubmitted : false
    })


    console.log(details.fname)
    console.log(details.lname)
    console.log(details.email)
    console.log(details.password)
    console.log(details.repassword)

    function handleName(event)  {
        setDetails ({ ...details,
            // fname:event.target.value
            [event.target.name]:event.target.value
        })
    }

    // function handleLname(event)  {
    //     setDetails ({ ...details,
    //         lname:event.target.value
    //         // [event.target.name]:event.target.value

    //     })
    // }


    return (
        <div>
            <form  >
                <div className = "InputArea">
                        <h2>Signup Page</h2><br/>
                        First Name : <input type="text" name = "fname" className = "textarea"  onChange = {handleName}></input><br></br><br></br>
                        Last Name : <input type="text" name = "lname" className = "textarea" onChange = {handleName} ></input><br></br><br></br>
                        Email : <input type="text" name = "email" className = "textarea" onChange = {handleName}></input><br></br><br></br>
                        Password : <input type="password" name = "password" className = "textarea" onChange = {handleName}></input><br></br><br></br>
                        Retye Password : <input type="password" name = "repassword" className = "textarea" onChange = {handleName}></input><br></br><br></br>
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

export default F_signup
