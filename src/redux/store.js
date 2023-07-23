// store.js
import { configureStore } from '@reduxjs/toolkit';
import botReducer from './slice';

const store = configureStore({
  reducer: {
    botReducer, 
  },
});

export default store;
