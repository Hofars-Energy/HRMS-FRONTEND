import React, { Component } from "react";
import "./todo.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      DOB: "",
      gender: "",
      department: "",
      experience: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  DOBhandler = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  depthandler = (event) => {
    this.setState({
      dept: event.target.value,
    });
  };

  experiencehandler = (event) => {
    this.setState({
      experience: event.target.value,
    });
  };
  rolehandler = (event) => {
    this.setState({
      role: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      DOB: "",
      gender: "",
      department: "",
      experience: "",
      role: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1> Adding RMS Request </h1> <label> FirstName: </label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="FirstName..."
          />{" "}
          <br />
          <label> LastName: </label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="LastName..."
          />{" "}
          <br />
          <label> DATE OF BIRTH: </label>{" "}
          <input
            type="date"
            value={this.state.password}
            onChange={this.DOBhandler}
            placeholder="Date of Birth..."
          />{" "}
          <br />
          <label> Gender: </label>
          <select onChange={this.genderhandler} defaultValue="Select Gender">
            {" "}
            <option defaultValue> Select Gender </option>{" "}
            <option value="male"> Male </option>{" "}
            <option value="female"> Female </option>{" "}
          </select>
          <br />
          <label> Department: </label>
          <select
            onChange={this.state.depthandler}
            defaultValue="Select Department"
            placeholder="Department..."
          >
            {" "}
            <option defaultValue> Department </option>{" "}
            <option value="IT"> IT </option> <option value="HR"> HR </option>{" "}
            <option value="SDE"> SDE </option>{" "}
          </select>
          <br />
          <label> Role: </label>
          <select onChange={this.rolehandler} defaultValue="Select Role">
            {" "}
            <option defaultValue> Select Role </option>{" "}
            <option value="male"> Junior Developer </option>{" "}
            <option value="female"> Senior Developer </option>{" "}
          </select>
          <br />
          <label> Experience( in yrs): </label>{" "}
          <input
            type="number"
            value={this.state.experience}
            onChange={this.experiencehandler}
            placeholder="Experience..."
          />{" "}
          <br />
          <input type="submit" value="Submit" />
        </form>{" "}
      </div>
    );
  }
}

export default Form;
