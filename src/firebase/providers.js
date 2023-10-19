import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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
    const resp = await createUserWithEmailAndPassword(fireBaseAuth, email, password, displayName);
    const { uid, photoURL } = await resp.user;
    await updateProfile(fireBaseAuth.currentUser, { displayName });
    console.log(displayName);
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
    const result = await signInWithEmailAndPassword(
      fireBaseAuth,
      formData.email,
      formData.password,
      formData.displayName
    );
    const { email, displayName } = await result.user;
    return {
      ok: true,
      email: email,
      displayName: displayName,
    };
  } catch (error) {
    console.log(error);
    return { ok: false, errorMessage: error.message };
  }
};

export const logOutFirebase = async () => {
  return await fireBaseAuth.signOut();
};
