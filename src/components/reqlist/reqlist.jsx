import React, { Component } from "react";
import "./reqlist.css";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

class ReqList extends Component {
  state = {
    applicants: [],
  };

  async componentDidMount() {
    const { data: applicants } = await axios.get("http://localhost:4000/req/");
    this.setState({ applicants });
    window.scrollTo(0, 0);
  }

  renderApplicants = (applicant, index) => {
    return (
      <tr key={index}>
        <td> {applicant.reqNum} </td>
        <td> {applicant.reqType} </td>
        <td> {applicant.branch} </td>
        <td> {applicant.department} </td>
        <td> {applicant.designation} </td>
        <td> {applicant.due} </td>
        <td> {applicant.experience} </td>
        <td> {applicant.status} </td>
        <td> {applicant.pendingwith} </td>
        <td>
          <button type="button" class="btn btn-warning">
            Edit
          </button>
          <button type="button" class="btn btn-danger">
            Close
          </button>
        </td>
      </tr>
    );
  };
  render() {
    return (
      <div className="reqList">
        <h1> RMS Request List </h1>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> Request Number </th>
              <th scope="col"> Request Type </th>
              <th scope="col"> Branch </th>
              <th scope="col"> Department </th>
              <th scope="col"> Designation </th>
              <th scope="col"> Due Date </th>
              <th scope="col"> Experience </th>
              <th scope="col"> Status </th>
              <th scope="col"> Pending With </th>
              <th scope="col" span="2">
                {" "}
                Actions{" "}
              </th>
            </tr>
          </thead>
          <tbody>{this.state.applicants.map(this.renderApplicants)}</tbody>
        </table>
        <div className="col-md-12 text-center">
          <Link to="/addreq">
            <button type="button" className="btn btn-primary">
              Add New
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ReqList;

// const applicants = [
//   {
//     RequestNumber: "RA-1018-0908",
//     RequestType: "Replacement",
//     Branch: "Mumbai",
//     Department: "Finanace & Accounts",
//     Designation: "Finanace & Accounts controller",
//     dueDate: "05/08/2019",
//     Experience: "4",
//     Status: "Approver One Pending",
//     PendingWith: "Amit Soni",
//   },
//   {
//     RequestNumber: "RA-1018-0908",
//     RequestType: "Replacement",
//     Branch: "Mumbai",
//     Department: "Finanace & Accounts",
//     Designation: "Finanace & Accounts controller",
//     dueDate: "05/08/2019",
//     Experience: "4",
//     Status: "Approver One Pending",
//     PendingWith: "Amit Soni",
//   },
//   {
//     RequestNumber: "RA-1018-0908",
//     RequestType: "Replacement",
//     Branch: "Mumbai",
//     Department: "Finanace & Accounts",
//     Designation: "Finanace & Accounts controller",
//     dueDate: "05/08/2019",
//     Experience: "4",
//     Status: "Approver One Pending",
//     PendingWith: "Amit Soni",
//   },
//   {
//     RequestNumber: "RA-1018-0908",
//     RequestType: "Replacement",
//     Branch: "Mumbai",
//     Department: "Finanace & Accounts",
//     Designation: "Finanace & Accounts controller",
//     dueDate: "05/08/2019",
//     Experience: "4",
//     Status: "Approver One Pending",
//     PendingWith: "Amit Soni",
//   },
//   {
//     RequestNumber: "RA-1018-0908",
//     RequestType: "Replacement",
//     Branch: "Mumbai",
//     Department: "Finanace & Accounts",
//     Designation: "Finanace & Accounts controller",
//     dueDate: "05/08/2019",
//     Experience: "4",
//     Status: "Approver One Pending",
//     PendingWith: "Amit Soni",
//   },
//   {
//     RequestNumber: "RA-1018-0908",
//     RequestType: "Replacement",
//     Branch: "Mumbai",
//     Department: "Finanace & Accounts",
//     Designation: "Finanace & Accounts controller",
//     dueDate: "05/08/2019",
//     Experience: "4",
//     Status: "Approver One Pending",
//     PendingWith: "Amit Soni",
//   },
// ];
