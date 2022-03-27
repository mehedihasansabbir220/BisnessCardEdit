import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import editorReducer from '../slices/editorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    editor: editorReducer,
  },
});
