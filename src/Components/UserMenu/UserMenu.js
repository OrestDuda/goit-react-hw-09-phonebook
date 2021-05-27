import React from "react";
import { connect } from "react-redux";
import authOperations from "../../Redux/Authentification/auth-operations";
import authSelectors from "../../Redux/Authentification/auth-selectors";

const UserMenu = ({ userMail, onBtnClick }) => (
  <div>
    {userMail}
    <button type="button" color="inherit" onClick={onBtnClick}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  userMail: authSelectors.getUserMail(state),
});

const mapDispatchToProps = {
  onBtnClick: authOperations.userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
