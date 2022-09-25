import React, { Component } from "react";
import "./Login.scss";
import Button from "../forms/Button/Button";
import { signInWithGoogle } from "../../firebase/utils";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  handleClick = () => {
    signInWithGoogle();
    this.props.setShowLogin(false);
  };

  render() {
    return (
      <div className="login flex__column__start">
        <div className="login__container gap__y16 flex__column__center">
          <h2>Log In</h2>
          <div className="login__form flex__column__center">
            <form onSubmit={this.handleSubmit}>
              <div className="login__form__social-login">
                <Button onClick={this.handleClick}>Sign in with Google</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
