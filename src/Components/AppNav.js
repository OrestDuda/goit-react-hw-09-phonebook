import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthMenu from "./Navigation/AuthMenu";
import { connect } from "react-redux";
import authSelectors from "../Redux/Authentification/auth-selectors";
import styles from "./AppNav.module.css";

class AppNav extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Navigation />
        {this.props.isUserLoggedIn ? <UserMenu /> : <AuthMenu />}
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  isUserLoggedIn: authSelectors.getIsLoggedIn(state),
});
export default connect(mapStateToProps)(AppNav);
