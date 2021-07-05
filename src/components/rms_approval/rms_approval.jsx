import React,{ Component } from "react";
import "./rms_approval.css"

const applicants = [
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        experience:'5',
        requestedby:'XYZ',
        status:'Pending',
        
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        experience:'5',
        requestedby:'XYZ',
        status:'Pending',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        experience:'5',
        requestedby:'XYZ',
        status:'Pending',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        experience:'5',
        requestedby:'XYZ',
        status:'Pending',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        experience:'5',
        requestedby:'XYZ',
        status:'Pending',
    },
    {
        requestnumber:'123',
        requesttype:'Placement',
        branch:'CSE',
        department:'HR',
        designation:'Billing Engineer',
        due:'5/6/21',
        experience:'5',
        requestedby:'XYZ',
        status:'Pending',
    },
];

class Approval extends Component {
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
            <td> {applicant.experience} </td>
            <td> {applicant.requestedby} </td>
            <td> {applicant.status} </td>
            <td>
            <button style={{fontSize:'13px'}}/><i className='far fa-edit'></i>
              <button type="button" class="btn btn-warning">
                Edit
              </button>
            </td>
          </tr>
        );
      };

    render() {
      return (
        <div className="reqList">
        <h1> RMS Approval List </h1>

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
              <th scope="col"> Requested By</th>
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
  
  export default Approval;