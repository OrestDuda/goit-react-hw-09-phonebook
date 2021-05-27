import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperations from "../../Redux/Authentification/auth-operations";
import authSelectors from "../../Redux/Authentification/auth-selectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const userMail = useSelector(authSelectors.getUserMail);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{userMail}</span>
      <button
        type="button"
        className={styles.logout}
        color="inherit"
        onClick={() => dispatch(authOperations.userLogout())}
      >
        Logout
      </button>
    </div>
  );
}
