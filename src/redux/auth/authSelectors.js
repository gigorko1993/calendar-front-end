const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getLoading = (state) => state.auth.isLoader;

const getUsername = (state) => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
};
export default authSelectors;
