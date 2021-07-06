import React,{ Component } from "react";
import "./talent_head_approval.css"

const applicants = [
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        resource:'1',
        requestedby:'XYZ',
        assignto : 'Akriti Mishra',
        remarks:'',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        resource:'1',
        requestedby:'XYZ',
        assignto : 'Akriti Mishra',
        remarks:'',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        resource:'1',
        requestedby:'XYZ',
        assignto : 'Akriti Mishra',
        remarks:'',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        resource:'1',
        requestedby:'XYZ',
        assignto : 'Akriti Mishra',
        remarks:'',
    },
];


class Head_Approval extends Component {
    state = {
      applicants: [],
    };
  
    async componentDidMount() {
      this.setState({ applicants });
      window.scrollTo(0, 0);
    }

    renderApplicants = (applicant, index) => {
        return (
          <tr key={index}>
            <td> {applicant.requestnumber} </td>
            <td> {applicant.requesttype} </td>
            <td> {applicant.branch} </td>
            <td> {applicant.department} </td>
            <td> {applicant.designation} </td>
            <td> {applicant.due} </td>
            <td> {applicant.resource} </td>
            <td> {applicant.requestedby} </td>
            <td> {applicant.assignto}</td>
            <td> <input type="text-area" placeholder="Enter Remarks"></input> </td>
            <td>
            <i className="fa fa-send-o"></i>
            <button type="button" className="btn">
                Submit
              </button>
            </td>
          </tr>
        );
      };

    render() {
      return (
        <div className="reqList">
        <h1> Talent Head Approval </h1>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col"> Request Number </th>
              <th scope="col"> Request Type </th>
              <th scope="col"> Branch </th>
              <th scope="col"> Department </th>
              <th scope="col"> Designation </th>
              <th scope="col"> Due Date </th>
              <th scope="col"> Resource </th>
              <th scope="col"> Requested By</th>
              <th scope="col"> Assign To</th>
              <th scope="col"> Remarks</th>
              <th scope="col" span="1">
                {" "}
                Actions{" "}
              </th>
            </tr>
          </thead>
          <tbody>{this.state.applicants.map(this.renderApplicants)}</tbody>
        </table>
      </div>
      );
    }
  }
  
  export default Head_Approval;