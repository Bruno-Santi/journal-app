import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  savedMessage: "",
  notes: [],
  active: null,
  //   active: {
  //     id: 'ABC123',
  //     title: '',
  //     body: '',
  //     date: 1234567,
  //     imageUrls: []
  //   }
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    creatingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      action.payload.map((note) => {
        state.notes.push(note);
      });
    },
    setSaving: (state) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const { creatingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } =
  journalSlice.actions;

export default journalSlice.reducer;
