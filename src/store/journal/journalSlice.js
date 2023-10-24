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
      state.savedMessage = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.savedMessage = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        return note;
      });
      state.savedMessage = "Note updated successfully!";
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogOut: (state, action) => {
      state.isSaving = false;
      state.savedMessage = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {},
  },
});

export const {
  creatingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  clearNotesLogOut,
  deleteNoteById,
} = journalSlice.actions;

export default journalSlice.reducer;
