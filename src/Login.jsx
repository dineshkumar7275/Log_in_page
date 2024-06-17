import React from "react";
import "./Log.css";
import passwordpng from "./password.png";
import personpng from "./person.png";
import user from './user.svg.jpg'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  function getdata(e) {
    e.preventDefault()
    localStorage.setItem("username", "Admin");
    localStorage.setItem("password", "Admin@123");

    let ids= localStorage.getItem("username");
    let pass= localStorage.getItem("password");
    if (ids == username && pass == password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      notify()
      handleApi()
    }
    else if(username=="" || password=="")
      {
        blank()
      }
    else {
      wrong()
    }
  }
  
  const notify=()=>
  {
    toast.dismiss();
    toast.success('Log in Successful',{style:{
      backgroundColor: 'lightgreen',
      color:'green',
       borderRadius: '10px',
        
    }},{closeButton:{innerHeight:'100px'}});
  }
  const wrong=()=>{
    toast.dismiss();
    toast.error('Wrong Username or Password',{style:{backgroundColor:'lightred'}});
  }
  const blank=()=>{
    toast.dismiss();
    toast.warn('Please enter Username and Password');
  }

  return (
    <div className="Login">
      <div className="container">
       <img src={user} className="profile-photo"></img>
        <h1 className="head">LOG IN</h1>
        <div className="data">
          <div className="profile">
            <img src={personpng}></img>
            <input
              type="text"
              placeholder="Username"
              className="name"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="password">
            <img src={passwordpng}></img>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <p>
            Lost Password ? <a href="#">Click here!</a>
          </p>
          <div>
          <button className="Log-in" type="submit" onClick={getdata}>
            Log in
          </button>
          <ToastContainer  position="top-center" theme="colored" newestOnTop={true} autoClose={3000}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
