import React from "react";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./Navigation/AuthMenu";
import { useSelector } from "react-redux";
import authSelectors from "../Redux/Authentification/auth-selectors";
import styles from "./AppNav.module.css";

export default function AppNav() {
  const isUserLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isUserLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
}
