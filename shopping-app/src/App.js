import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Profile from './components/Profile'
import { BrowserRouter as Router, Routes, 
  Route, Link, BrowserRouter } from "react-router-dom";
import LogOut from './components/LogOut';
import LoginForm from './components/LoginForm';
import Masala from './components/Masala';
import ProceedToBuy from './components/ProceedTOBuy';

function App() {
  const [currUser,setCurrUser]=useState(0);

  return (
    <div className="App">

      
      {/* <Form/> */}

      {/* <Profile/> */}


      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Form/>} />
        {/* <Route path="/profile" element={<Profile setuser={setCurrUser} currUser={currUser}/>} /> */}
        
        <Route path="/masala" element={<Masala/>} />
        <Route path="/profile" element={<Profile/>} />
          {/* <Route path="/form" element={<Form setuser={setCurrUser} currUser={currUser}/>} /> */}
          <Route path="/form" element={<Form />} />
          <Route path="/logout" element={<LogOut/>} />
          {/* <Route path="/loginform" element={<LoginForm setuser={setCurrUser} currUser={currUser}/>} /> */}
          <Route path="/loginform" element={<LoginForm />} />

          <Route path="/ProceedToBuy" element={<ProceedToBuy />} />
          
          
          </Routes>
        </BrowserRouter>

        {/* <LoginForm/> */}

      
    </div>
  );
}

export default App;
