import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    age: null,
  }

export const botSlice = createSlice({
  name: 'bot',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { addName, addAge } = botSlice.actions;

export default botSlice.reducer; // Export the reducer as default
