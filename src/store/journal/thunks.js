import { doc, collection, setDoc } from "firebase/firestore/lite";
import { fireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(fireBaseDB, `/${uid}/journalApp/notes`));
    const resp = await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    console.log(newDoc, resp);
  };
};
