import {USER_LOGGED_IN,USER_LOGGED_OUT} from "./types"

import api from '../api/api'

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
  });

  export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
  });

  //Login auth

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
 localStorage.loginJWT=user.token;
    dispatch(userLoggedIn(user));
  });

  //singup auths

  export const signup = data => dispatch =>
  api.user.losignupgin(data)
  .then(user => {
 localStorage.loginJWT=user.token;
    dispatch(userLoggedIn(user));
  });

//logout auth
  export const logout = () => dispatch =>
  {
 localStorage.removeItem('loginJWT');
    dispatch(userLoggedOut());
  };
