import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { fireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(fireBaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    console.log(password);
    const resp = await createUserWithEmailAndPassword(fireBaseAuth, email, password);
    const { uid, photoURL } = await resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
      email,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginUserWithEmailAndPassword = async (formData) => {
  try {
    const result = await signInWithEmailAndPassword(fireBaseAuth, formData.email, formData.password);
    const { email } = await result.user;
    return {
      ok: true,
      email: email,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const logOutFirebase = async () => {
  return await fireBaseAuth.signOut();
};
