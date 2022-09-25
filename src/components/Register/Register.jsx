import React, { Component } from "react";
import "./Register.scss";
import Button from "../forms/Button/Button";
import FormInput from "../forms/FormInput/FormInput";

import { auth, handleUserProfile } from "../../firebase/utils";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      const error = ["Passwords don't match"];
      this.setState({
        errors: error,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });

      this.setState({
        ...initialState,
      });

      this.props.setShowRegister(false);
    } catch (err) {
      //console.log(err)
    }
  };

  render() {
    const { displayName, email, password, confirmPassword, errors } =
      this.state;

    return (
      <div className="register flex__column__start">
        <div className="register__container gap__y16 flex__column__center">
          <h2>Register</h2>
          {errors.length > 0 && (
            <div className="register__error">
              {errors.map((err, index) => {
                return <span key={index}>{`*${err}`}</span>;
              })}
            </div>
          )}
          <div className="register__form flex__column__center">
            <form
              className="flex__column__center gap__y8"
              onSubmit={this.handleFormSubmit}
            >
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Full name"
                onChange={this.handleChange}
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm password"
                onChange={this.handleChange}
              />
              <Button type="submit">Sign Up</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
