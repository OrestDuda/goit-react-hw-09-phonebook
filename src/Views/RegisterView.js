import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../Redux/Authentification/auth-operations";
import styles from "./RegisterView.module.css";

export default function RegisterView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      authOperations.userRegister({
        name: name,
        email: email,
        password: password,
      })
    );

    setPassword("");
    setEmail("");
    setName("");
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
            value={name}
            onChange={handleChangeName}
            className={styles.input}
          />
        </label>
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
        <button type="submit" className={styles.register}>
          Register
        </button>
      </form>
    </>
  );
}
