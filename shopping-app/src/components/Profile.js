import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import data from "./db.json"

export default function Profile() {
  // console.log(data)
  // const data1=data.map(employee =>  {employee.posts})

  const[data,setData]=useState([])
  // const[y,setY]=useState(-1)
  
  const[id,setId]=useState(6)
  console.log(data)

  useEffect(() =>{
    // axios.get(`https://63898a64c5356b25a2022e0b.mockapi.io/Fakedata/${id}`)
    axios.get(`https://63898a64c5356b25a2022e0b.mockapi.io/Fakedata/${id}`)
  
    .then(res =>{
    setData(res.data)
  })
  
  .catch(err =>{
    console.log(err)
  })

},[id]  

  )
  // setY(data.length-1)
  console.log(data.length)




  return (
   
  
    <div>
      
      
      <button className="btn" type="button" data-bs-target="offcanva"/>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    

    <button style={{backgroundColor:"dimgrey",alignContent:'center',width:"25%", height:'5rem', fontSize:'2rem'}} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanva">
      My Profile
    </button>


    <div className="offcanvas offcanvas-start" id="offcanva">
      <div className="offcanvas-header">
        <h3 className="offcanvas-title">Hello User</h3>
      </div>

      <div className="offcanvas-body">
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#model">
          Past Orders
        </button><br/>
        <br/>

        {/* <Link to="/Form"> */}
        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#model2">
          Account Details
        </button>
        {/* </Link> */}
        
        <br/>
        <br/>

        <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#model3">
          Log Out
        </button>
      </div>
    </div>

    <div className="modal" id="model">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Past Orders</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <h6>Turmeric</h6>
            <p>Rs.700</p>
            <h6>Everest Chaat</h6>
            <p>Rs.465</p>
            <h6>Chilli</h6>
            <p>Rs.360</p>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>

        </div>

      </div>

    </div>



    <div className="modal" id="model2">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Account</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>


          <div>
            <h6>
            First Name: {data.firstname} <br></br>
            Last Name: {data.lastname} <br></br>
            Email: {data.email} <br></br>
            {/* Password: {data.password} <br></br>
            Retyped Password: {data.retypepassword} */}
            </h6>

          </div>





          {/* {data.posts.map(function x(p){
        return(
          <h1>{p.firstname}<br></br>
          {p.lastname}<br></br>
          {p.email}
          </h1>
        )

      })} */}

          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>

        </div>

      </div>

    </div>

    
    <div className="modal" id="model3">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">LogOut</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <h6>Are you sure you want to LogOut?</h6>
            
          </div>

          <div classv="modal-footer">
            
          <Link to="/LogOut"> 
          <button style={{margin:"10px"}} type="button" className="btn btn-danger" data-bs-dismiss="modal">LogOut</button>
          </Link>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
          </div>

        </div>

      </div>

    </div>

    </div>
  )
  }