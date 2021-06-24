import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = { data: {}, error: {} };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    error.details.map((err) => {
      errors[err.path[0]] = err.message;
      return;
    });
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    if (!result.error) return null;
    return result.error.details[0].message;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, error });
  };

  renderButton = (label) => {
    return (
      <button
        disabled={this.validate()}
        type="submit"
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, content, type = "text", af = false) => {
    return (
      <Input
        name={`Input${name}`}
        type={type}
        af={af}
        data={this.state.data[name]}
        content={content}
        handleChange={this.handleChange}
        error={this.state.error[name]}
      />
    );
  };
  renderSelect = (name, content, options, type = "text") => {
    const { data, error } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={content}
        options={options}
        error={error[name]}
      />
    );
  };
}

export default Form;
