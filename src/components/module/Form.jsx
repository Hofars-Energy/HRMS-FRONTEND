import React, { Component } from "react";
import "./todo.css";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      requestType: "",
      department: "",
      postionClass: "",
      costCentre: "",
      designation: "",
      role: "",
      employmentType: "",
      branch: "",
      grade: "",
      businessType: "",
      applicableTo: "",
      dueDate: "",
      workExperience: 0,
      Qualification: "",
      ctc: "",
      priority: "",
      specialization: "",
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handlers creation for each task.

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
  reqTypehandler = (event) => {
    this.setState({
      requestType: event.target.value,
    });
  };

  depthandler = (event) => {
    this.setState({
      department: event.target.value,
    });
  };

  positionClasshandler = (event) => {
    this.setState({
      postionClass: event.target.value,
    });
  };

  costCentrehandler = (event) => {
    this.setState({
      costCentre: event.target.value,
    });
  };

  designationhandler = (event) => {
    this.setState({
      designation: event.target.value,
    });
  };

  rolehandler = (event) => {
    this.setState({
      role: event.target.value,
    });
  };

  empTypehandler = (event) => {
    this.setState({
      employmentType: event.target.value,
    });
  };

  branchhandler = (event) => {
    this.setState({
      branch: event.target.value,
    });
  };

  gradehandler = (event) => {
    this.setState({
      grade: event.target.value,
    });
  };

  businessTypehandler = (event) => {
    this.setState({
      businessType: event.target.value,
    });
  };

  genderhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  dueDatehandler = (event) => {
    this.setState({
      dueDate: event.target.value,
    });
  };

  experiencehandler = (event) => {
    this.setState({
      workExperience: event.target.value,
    });
  };

  qualificationhandler = (event) => {
    this.setState({
      qualification: event.target.value,
    });
  };

  ctchandler = (event) => {
    this.setState({
      ctc: event.target.value,
    });
  };

  ctchandler2 = (event) => {
    this.setState({
      ctc: event.target.value,
    });
  };

  specializationhandler = (event) => {
    this.setState({
      specialization: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    const {
      branch,
      requestType,
      department,
      designation,
      dueDate,
      workExperience,
    } = this.state;

    try {
      const repsone = axios.post("http://localhost:4000/req", {
        reqNum: "12345",
        branch: "Mumbai",
        reqType: "Replacement",
        department: "IT",
        designation: "Finanace & Accounts controller",
        due: "05/08/2023",
        status: "pending",
        experience: 69,
        pendingwith: "rajat",
      });
      console.log(repsone);
    } catch (err) {
      console.log(err);
    }

    console.log(this.state);
    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   requestType: "",
    //   department: "",
    //   postionClass: "",
    //   costCentre: "",
    //   designation: "",
    //   role: "",
    //   employmentType: "",
    //   branch: "",
    //   grade: "",
    //   businessType: "",
    //   applicableTo: "",
    //   dueDate: "",
    //   workExperience: "",
    //   Qualification: "",
    //   ctc: "",
    //   priority: "",
    //   specialization: "",
    // });
    event.preventDefault();
  };

  //untill here all the handlers are created.

  render() {
    return (
      <div className="form-style">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        />
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <h1>Adding RMS Request</h1>
            <br />
            <label>FirstName:</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.firsthandler}
              placeholder="FirstName..."
            />{" "}
            {/* <br /> */}
            <label>LastName:</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.lasthandler}
              placeholder="LastName..."
            />{" "}
            <br />
            <label> Request Type: </label>
            <select
              onChange={this.state.reqTypehandler}
              defaultValue="Select Type"
              placeholder="Choose from here"
            >
              <option defaultValue> Request Type </option>
              <option value="New"> New </option>
              <option value="Replacement"> Replacement </option>{" "}
            </select>
            {/* <br /> */}
            <label> Department: </label>
            <select
              onChange={this.state.depthandler}
              defaultValue="Select Department"
              placeholder="Department..."
            >
              <option defaultValue> Department </option>
              <option value="IT"> IT </option>
              <option value="HR"> HR </option>
              <option value="SDE"> SDE </option>{" "}
            </select>
            <br />
            <label> Position Class: </label>
            <select
              onChange={this.state.positionClasshandler}
              defaultValue="Select Position Class"
              placeholder="Position Class..."
            >
              {" "}
              <option defaultValue> Select </option>{" "}
              <option value="a"> A </option> <option value="b"> B </option>{" "}
              <option value="c"> C </option>{" "}
            </select>
            {/* <br /> */}
            <label> Cost Centre: </label>
            <select
              onChange={this.state.costCentrehandler}
              defaultValue="Select Cost Centre"
              placeholder="--Select--"
            >
              <option defaultValue> Select </option>{" "}
              <option value="a"> A </option> <option value="b"> B </option>{" "}
              <option value="c"> C </option>{" "}
            </select>
            <br />
            <label> Designation: </label>
            <select
              onChange={this.state.designationhandler}
              defaultValue="Select Designation"
              placeholder="--Select--"
            >
              <option defaultValue> Select </option>{" "}
              <option value="a"> A </option> <option value="b"> B </option>{" "}
              <option value="c"> C </option>{" "}
            </select>
            {/* <br /> */}
            <label> Role: </label>
            <select onChange={this.rolehandler} defaultValue="Select Role">
              {" "}
              <option defaultValue> Select Role </option>{" "}
              <option value="Junior Developer"> Junior Developer </option>{" "}
              <option value="Senior Developer"> Senior Developer </option>{" "}
            </select>
            <br />
            <label> Employment Type: </label>
            <select
              onChange={this.empTypehandler}
              defaultValue="Select Emp Type"
            >
              {" "}
              <option defaultValue> Select Employment Type </option>{" "}
              <option value="FT"> Full Time </option>{" "}
              <option value="trainee"> Trainee </option>{" "}
              <option value="IS"> Internship </option>{" "}
              <option value="part-time"> Part - time </option>{" "}
            </select>
            {/* <br /> */}
            <label> Branch: </label>
            <select onChange={this.branchhandler} defaultValue="Select Branch">
              {" "}
              <option defaultValue> Select Branch </option>{" "}
              <option value="a"> A </option> <option value="b"> B </option>{" "}
              <option value="c"> C </option>{" "}
            </select>
            <br />
            <label> Grade: </label>
            <select onChange={this.gradehandler} defaultValue="Select Grade">
              {" "}
              <option defaultValue> Select Grade </option>{" "}
              <option value="a"> A </option> <option value="b"> B </option>{" "}
              <option value="c"> C </option>{" "}
            </select>
            {/* <br /> */}
            <label> Business Type: </label>
            <select
              onChange={this.businessTypehandler}
              defaultValue="Select Business Type"
            >
              {" "}
              <option defaultValue> Business Type </option>{" "}
              <option value="a"> A </option> <option value="b"> B </option>{" "}
              <option value="c"> C </option>{" "}
            </select>
            <br />
            <label> Gender: </label>
            <select onChange={this.genderhandler} defaultValue="Select Gender">
              {" "}
              <option defaultValue> Select Gender </option>{" "}
              <option value="male"> Male </option>{" "}
              <option value="female"> Female </option>{" "}
            </select>
            {/* <br /> */}
            <label> Due Date: </label>{" "}
            <input
              type="date"
              value={this.state.dueDate}
              onChange={this.dueDatehandler}
            />{" "}
            <br />
            <label> Experience( in yrs): </label>{" "}
            <input
              type="number"
              value={this.state.experience}
              onChange={this.experiencehandler}
              placeholder="Experience.."
              style={{ width: "150px" }}
            />{" "}
            {/* <br /> */}
            {/* <label>Qualification: </label> <input list="Qualification" >
          <datalist id="cars">
            <option value="Diploma" />
            <option value="Graduate" />
            <option value="High Secondary" />
            <option value="Post Graduate" />
            <option value="other" />
          </datalist> */}
<<<<<<< .merge_file_Vn8oE3
          <label style={{padding : "0px",width:"110px"}}> CTC( in lakhs): </label> 
          <label style={{padding : "0px",width:"50px"}}> Min: </label>{" "}
          <input
            type="number"
            value={this.state.ctc}
            onChange={this.ctchandler2}
          />{" "}
          <label style={{padding : "0px",width:"50px"}}> Max: </label>{" "}
          <input
            type="number"
            value={this.state.ctc}
            onChange={this.ctchandler}
          />{" "}
          <br />
          <label style={{margin:"15px 15px 0px 250px" }}> Specialization: - </label>
          <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox"  id="s1" name="s1" value="ReactJs"  />
             ReactJs
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox"  id="s2" name="s2" value="NodeJs"  />
            NodeJs
          </div>
          <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox"  id="s3" name="s3" value="Python"  />
            Python
          </div>
          <br />
          <div className="text-center">
          //<input type="reset" />
          <input type="submit" value="Submit" />
          </div>
          
        </form>
=======
            <label style={{ padding: "0px", width: "110px" }}>
              {" "}
              CTC( in lakhs):{" "}
            </label>
            <label style={{ padding: "0px", width: "50px" }}> Min: </label>{" "}
            <input
              type="number"
              value={this.state.ctc}
              onChange={this.ctchandler2}
            />{" "}
            <label style={{ padding: "0px", width: "50px" }}> Max: </label>{" "}
            <input
              type="number"
              value={this.state.ctc}
              onChange={this.ctchandler}
            />{" "}
            <br />
            <label style={{ margin: "15px 15px 0px 250px" }}>
              {" "}
              Specialization: -{" "}
            </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="s1"
                name="s1"
                value="ReactJs"
              />
              ReactJs
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="s2"
                name="s2"
                value="NodeJs"
              />
              NodeJs
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="s3"
                name="s3"
                value="Python"
              />
              Python
            </div>
            <br />
            <div className="text-center">
              <input type="reset" />
              <input type="submit" value="Submit" />
            </div>
          </form>
>>>>>>> .merge_file_qZesH7
        </div>
      </div>
    );
  }
}

export default Form;
