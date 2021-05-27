import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import styles from "./LoginView.module.css";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitted(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <>
        <p className={styles.title}>Login</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitted: (userInput) => dispatch(authOperations.userLogin(userInput)),
});

export default connect(null, mapDispatchToProps)(LoginView);
