import React, { Component } from "react";
import "./Login.scss";
import Button from "../forms/Button/Button";
import { signInWithGoogle, auth } from "../../firebase/utils";
import FormInput from "../../components/forms/FormInput/FormInput";

const initialState = {
  email: "",
  password: "",
};

class Login extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
      this.props.setShowLogin(false);
    } catch (err) {
      //console.log(err)
    }
  };

  handleClick = () => {
    signInWithGoogle();
    this.props.setShowLogin(false);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login flex__column__start">
        <div className="login__container gap__y16 flex__column__center">
          <h2>Log In</h2>
          <div className="login__form flex__column__center">
            <form
              className="flex__column__center gap__y8"
              onSubmit={this.handleSubmit}
            >
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={this.handleChange}
              />
              <Button type="submit">Log In</Button>

              <div className="login__form__social-login">
                <Button onClick={this.handleClick}>Sign In with Google</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
