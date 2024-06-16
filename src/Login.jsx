import React from "react";
import "./Log.css";
import passwordpng from "./password.png";
import personpng from "./person.png";
import user from './user.svg.jpg'
import { useState } from "react";


function Login() {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [loged, setloged] = useState(1);
  function getdata(e) {
    console.log(id,password)
    e.preventDefault()
    localStorage.setItem("id", "Admin");
    localStorage.setItem("password", "Admin@123");

    let ids= localStorage.getItem("id");
    let pass= localStorage.getItem("password");
    if (ids == id && pass == password) {
      localStorage.setItem("id", id);
      localStorage.setItem("password", password);
      setloged(2);
    } else {
      setloged(3);
    }
  }
  return (
    <div className="Login">
      <div className="container">
       <img src={user} className="profile-photo"></img>
        <h1 className="head">LOG IN</h1>
        {loged == 1 ? (
          <h2></h2>
        ) : loged == 2 ? (
          <h2 style={{ color: "green" }}>Log in successfull</h2>
        ) : (
          <h2>Wrong Username or Password</h2>
        )}
        <div className="data">
          <div className="profile">
            {/* <i class="fa-solid fa-user" id="no"></i> */}
            <img src={personpng}></img>
            <input
              type="text"
              placeholder="Username"
              className="name"
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
          </div>
          <div className="password">
            {/* <i class="fa-solid fa-envelope"></i> */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
