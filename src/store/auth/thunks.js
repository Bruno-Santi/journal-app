import {
  logOutFirebase,
  loginUserWithEmailAndPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";

import { checkingCredentials, login, logout } from "./authSlice";

const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithEmailPassword({ email, password, displayName });
    console.log(result);
  };
};

const startLoginWithEmailAndPassword = (formData) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginUserWithEmailAndPassword(formData);

    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

const startLogOut = () => {
  return async (dispatch) => {
    try {
      await logOutFirebase();
      dispatch(logout());
    } catch (error) {
      return error.message;
    }
  };
};

export {
  checkingAuthentication,
  startGoogleSignIn,
  startCreatingUserWithEmailPassword,
  startLoginWithEmailAndPassword,
  startLogOut,
};
