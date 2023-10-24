import { doc, collection, setDoc, getDocs } from "firebase/firestore/lite";
import { fireBaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

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

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("Invalid uid");
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: activeNote } = getState().journal;

    const noteToFireStore = { ...activeNote };

    delete noteToFireStore.id;
    const docRef = doc(fireBaseDB, `${uid}/journalApp/notes/${activeNote.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
    dispatch(updateNote(activeNote));
  };
};

export const startingUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    const filesUploadPromises = [];

    for (const file of files) {
      filesUploadPromises.push(fileUpload(file));
    }

    const photosUrls = await Promise.all(filesUploadPromises);
    dispatch(setPhotosToActiveNote(photosUrls));
  };
};
