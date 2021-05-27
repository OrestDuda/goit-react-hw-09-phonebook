import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import styles from "./RegisterView.module.css";

export default function RegisterView() {
  const [user, setUser] = useState({ name: "", password: "", email: "" });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      authOperations.userRegister({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );

    setUser({ name: "", password: "", email: "" });
  };
  return (
    <>
      <p className={styles.title}>Register</p>

      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={user.name}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
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
        <button type="submit" className={styles.register}>
          Register
        </button>
      </form>
    </>
  );
}
