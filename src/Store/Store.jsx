import { createSlice, configureStore } from "@reduxjs/toolkit";
const initial = { initials: [] };

const Note = createSlice({
  name: "notesList",
  initialState: initial,
  reducers: {
    create(state, action) {
      state.initials.push(action.payload);
    },
    edit(state, action) {
      let index = state.initials.findIndex((note) => {
        return note.id === action.payload.id;
      });
      state.initials[index] = action.payload.note;
    },
    delete(state, action) {
      state.initials = state.initials.filter(
        (note) => note.id !== action.payload
      );
    },
  },
});
const Store = configureStore({
  reducer: { Notes: Note.reducer },
});
export const NoteActions = Note.actions;
export default Store;
