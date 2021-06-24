import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Button from "../button/button";
function Register({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const submitHandler = (e) => {
    e.preventDeafult();

    Login(details);
  };

  const clickerrr = () => {
    if (details.password === details.password2) {
      axios
        .post("http://localhost:4000/user/", {
          username: details.name,
          password: details.password,
        })
        .then(function (response) {
          alert("new user created!");
        });
    } else {
      alert("passwords do not match");
    }
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email address"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="passwordrepeat"
              placeholder="repeat password"
              onChange={(e) =>
                setDetails({ ...details, password2: e.target.value })
              }
              value={details.password2}
            />
          </div>
          {/* <input className="submit-button" type="submit" value="Login" /> */}
          <Button
            onClick={() => clickerrr()}
            classname="btns"
            children="Register"
          ></Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
