import {
  logOutFirebase,
  loginUserWithEmailAndPassword,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogOut } from "../journal/journalSlice";

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

    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
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
      dispatch(clearNotesLogOut());
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
