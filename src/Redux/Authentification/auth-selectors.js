const getIsLoggedIn = (state) => state.userData.isLoggedIn;
const getUserMail = (state) => state.userData.user.email;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsLoggedIn,
  getUserMail,
};
