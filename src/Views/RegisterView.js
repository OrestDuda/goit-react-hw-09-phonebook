import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import styles from "./RegisterView.module.css";

class RegisterView extends Component {
  state = {
    name: "",
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
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <>
        <p className={styles.title}>Register</p>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
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
          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitted: (userInput) => dispatch(authOperations.userRegister(userInput)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
