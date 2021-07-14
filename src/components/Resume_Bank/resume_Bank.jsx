import React, { Component } from 'react';
import './resumebank.css';

class Resume_details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      requestType: '',
      dept: '',
      bloodgroup: '',
      candidate_code: '',
      email: '',
      role: '',
      gender: '',
      pan_number: '',
      adhaar_number: '',
      mobile_number: '',
      dob: '',
      marital_status: '',
      uan_number: '',
      source: '',
      request_number: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  lasthandler = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  reqTypehandler = event => {
    this.setState({
      requestType: event.target.value
    });
  };

  depthandler = event => {
    this.setState({
      dept: event.target.value
    });
  };

  bloodgrouphandler = event => {
    this.setState({
      bloodgroup: event.target.value
    });
  };

  candidate_code_handler = event => {
    this.setState({
      candidate_code: event.target.value
    });
  };

  emailhandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  rolehandler = event => {
    this.setState({
      role: event.target.value
    });
  };

  genderhandler = event => {
    this.setState({
      gender: event.target.value
    });
  };

  pan_number_handler = event => {
    this.setState({
      pan_number: event.target.value
    });
  };

  adhaar_number_handler = event => {
    this.setState({
      adhaar_number: event.target.value
    });
  };
  mobile_number_handler = event => {
    this.setState({
      mobile_number: event.target.value
    });
  };
  dob_handler = event => {
    this.setState({
      dob: event.target.value
    });
  };

  marital_status_handler = event => {
    this.setState({
      martial_status: event.target.value
    });
  };

  uan_number_handler = event => {
    this.setState({
      uan_number: event.target.value
    });
  };

  source_handler = event => {
    this.setState({
      source: event.target.value
    });
  };

  request_number_handler = event => {
    this.setState({
      request_number: event.target.value
    });
  };

  handleSubmit = event => {
    alert(
      `${this.state.firstName} ${
        this.state.lastName
      }  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      requestType: '',
      dept: '',
      bloodgroup: '',
      candidate_code: '',
      email: '',
      role: '',
      gender: '',
      pan_number: '',
      adhaar_number: '',
      mobile_number: '',
      dob: '',
      marital_status: '',
      uan_number: '',
      source: '',
      request_number: ''
    });
    event.preventDefault();
  };

  handleReset = event => {
    alert(
      `${this.state.firstName} ${
        this.state.lastName
      } Cancelled Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      requestType: '',
      dept: '',
      bloodgroup: '',
      candidate_code: '',
      email: '',
      role: '',
      gender: '',
      pan_number: '',
      adhaar_number: '',
      mobile_number: '',
      dob: '',
      marital_status: '',
      uan_number: '',
      source: '',
      request_number: ''
    });
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
            <h1>Add Resume Bank</h1>
            <br />
            <h3>Personal Details</h3>
            <br />
            <label>FirstName:</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.firsthandler}
              placeholder="FirstName..."
            />{' '}
            {/* <br /> */}
            <label>LastName:</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.lasthandler}
              placeholder="LastName..."
            />{' '}
            <br />
            <label>Candidate Code:</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.candidate_code_handler}
              placeholder="Candidate Code .."
            />{' '}
            <label> Request Type: </label>
            <select
              onChange={this.state.request_typehandler}
              defaultValue="Select Type"
              placeholder="Choose from here"
            >
              <option defaultValue> Request Type </option>
              <option value="New"> New </option>
              <option value="Replacement"> Replacement </option>{' '}
            </select>
            <br />
            <label> Department: </label>
            <select
              onChange={this.state.depthandler}
              defaultValue="Select Department"
              placeholder="Department..."
            >
              <option defaultValue> Department </option>
              <option value="IT"> IT </option>
              <option value="HR"> HR </option>
              <option value="SDE"> SDE </option>{' '}
            </select>
            <label> Blood Group </label>
            <select
              onChange={this.state.positionClasshandler}
              defaultValue="Select Blood Group"
              placeholder="Blood Group.."
            >
              {' '}
              <option defaultValue> Select </option>{' '}
              <option value="bpositive"> B+ </option>
              <option value="bnegative"> B- </option>{' '}
              <option value="opositive"> O+ </option>{' '}
              <option value="onegative"> O- </option>{' '}
              <option value="apositive"> A+ </option>{' '}
              <option value="anegative"> A- </option>{' '}
              <option value="abpositive"> AB+ </option>{' '}
              <option value="abnegative"> AB- </option>{' '}
            </select>
            <br />
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.email_handler}
              placeholder="FirstName..."
            />{' '}
            <label> Role: </label>
            <select onChange={this.role_handler} defaultValue="Select Role">
              {' '}
              <option defaultValue> Select Role </option>{' '}
              <option value="Junior Developer"> Junior Developer </option>{' '}
              <option value="Senior Developer"> Senior Developer </option>{' '}
            </select>
            <label> Gender : </label>
            <select onChange={this.gender_handler} defaultValue="Select Role">
              {' '}
              <option defaultValue> Select Gender </option>{' '}
              <option value="male"> Male </option>{' '}
              <option value="female"> Female </option>{' '}
              <option value="nonbinary"> Non Binary </option>{' '}
            </select>
            <label>UAN Number:</label>
            <input
              type="text"
              value={this.state.uan_number}
              onChange={this.uan_number_handler}
              placeholder="UAN Number.."
            />
            {/* <br /> */}
            <label> Request Number: </label>
            <select
              onChange={this.request_number_handler}
              defaultValue="Select Request Number"
            >
              {' '}
              <option defaultValue> Select Request Number </option>{' '}
              <option value="a"> A </option>
              <option value="b"> B </option> <option value="c"> C </option>{' '}
            </select>
            <label> Marital Status: </label>
            <select
              onChange={this.marital_status_handler}
              defaultValue="Select Marital Status"
            >
              {' '}
              <option defaultValue> Status </option>{' '}
              <option value="single"> SINGLE </option>
              <option value="married"> MARRIED </option>{' '}
              <option value="divorced"> DIVORCED </option>{' '}
            </select>
            <br />
            <label>Pan Number:</label>
            <input
              type="text"
              value={this.state.pan_number}
              onChange={this.pan_number_handler}
              placeholder="Pan Number.."
            />
            <label>Adhaar Number:</label>
            <input
              type="text"
              value={this.state.adhaar_number}
              onChange={this.adhaar_number_handler}
              placeholder="Adhaar Number..."
            />
            {/* <br /> */}
            <label> Mobile Number </label>
            <input
              type="text"
              value={this.state.mobile_number}
              onChange={this.mobile_number_handler}
            />{' '}
            <label>DOB:</label>
            <input
              type="date"
              value={this.state.dob}
              onChange={this.dob_handler}
              placeholder="Date of Birth..."
            />{' '}
            <label> Sources: </label>
            <select onChange={this.source_handler} defaultValue="Select Source">
              {' '}
              <option defaultValue> Status </option>{' '}
              <option value="a"> Consultant </option>
              <option value="b"> Employee </option>{' '}
              <option value="b"> HR </option>{' '}
            </select>
            <label htmlFor="File">
              Upload Resume
              <input name="resume" type="file" />
            </label>
            <br />
            <label>Gender: </label>
            <br />
            <input type="radio" id="male" name="male" value="MALE" />
            <label for="male">MALE</label>
            <input type="radio" id="female" name="female" value="FEMALE" />
            <label for="female">FEMALE</label>
            <input
              type="radio"
              id="non_binary"
              name="non_binary"
              value="non_binary"
            />
            <label for="non_binary">NON BINARY</label>
            {/* <div class="input-group">
  <div class="input-group-prepend">
    <div class="input-group-text">
    <input type="radio" aria-label="Radio button for following text input"/>
    </div>
  </div>
  <label>MALE</label>
</div> */}
            <br />
            <div className="text-center">
              <button type="submit" class="btn btn-outline-success">
                Success
              </button>
              <button type="cancel" class="btn btn-outline-danger" onclick={this.handleReset}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Resume_details;
