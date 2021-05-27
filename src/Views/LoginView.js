import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import styles from "./LoginView.module.css";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.userLogin({ email: email, password: password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <p className={styles.title}>Login</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChangeEmail}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChangePassword}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.login}>
          Login
        </button>
      </form>
    </>
  );
}
