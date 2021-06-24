import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.content}</label>
      <input
        autoFocus={props.af}
        name={props.type}
        type={props.type}
        value={props.data}
        onChange={props.handleChange}
        className="form-control"
        id={props.name}
        // aria-describedby="emailHelp"
        placeholder={props.content}
      />
      <div>
        {props.error && (
          <div className="alert alert-danger"> {props.error}</div>
        )}
      </div>
    </div>
  );
};

export default Input;
