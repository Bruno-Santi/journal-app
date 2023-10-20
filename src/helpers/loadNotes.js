import { collection, getDocs } from "firebase/firestore/lite";
import { fireBaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("Please provide a UID");

  const collectionRef = await collection(fireBaseDB, `/${uid}/journalApp/notes`);
  const docs = await getDocs(collectionRef);
  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  return notes;
};
