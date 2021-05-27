import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import styles from "./LoginView.module.css";

export default function LoginView() {
  const [user, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      authOperations.userLogin({ email: user.email, password: user.password })
    );
    setUser({ email: "", password: "" });
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
            value={user.email}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            required
            value={user.password}
            onChange={handleChange}
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
