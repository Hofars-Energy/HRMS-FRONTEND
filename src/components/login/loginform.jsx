import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    error: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1> Login !</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Enter Username", "username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
