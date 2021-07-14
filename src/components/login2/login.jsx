import React, { useState, useEffect } from "react";
import "./login.css";
//this cahnge is in the second branch
import axios from "axios";
import Button from "../button/button";
import { Link } from "react-router-dom";
function LoginForm2({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const [users, setUsers] = useState([]);
  const submitHandler = (e) => {
    e.preventDeafult();

    Login(details);
  };

  useEffect(async () => {
    const { data: yo } = await axios.get("http://localhost:4000/user/");
    setUsers(yo);
  }, []);

  const loginer = () => {
    const data = users.find((ex) => {
      return ex.username == details.name;
    });
    if (data) {
      if (details.password === data.password) {
        alert("Successfully Logged in!");
      } else {
        alert("username or password do not match any user details");
      }
    } else {
      alert("username or password do not match any user details");
    }
  };
  return (
    <div className= "loginpage">
      <form onSubmit={submitHandler}>
        <div className="form-innerlg">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-grouplg">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoFocus
              placeholder="Enter full name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div> */}
          <div className="form-grouplg">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="atleast 8 characters"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          {/* <input className="submit-button" type="submit" value="Login" /> */}
          <Button className="btns" onClick={() => loginer()} children="login" />
          <br></br>
          <br></br>
          <Button
            link="/register"
            classname="btns"
            children="Register"
          ></Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm2;
