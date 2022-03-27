import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  zoomRatio: 1,
  preview: false,
  progress: 0,
  animations: [],
  styles: [],
  dataSources: [],
  editing: false,
  objects: undefined,
  loading: false,
  descriptors: '',
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditorState: (state, action) => {
      if (typeof action === 'object') {
        for (const key in object) {
          if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            state[key] = element;
          }
        }
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
  },
});

export const {
  setEditorState,
  setLoading,
  setEditing,
} = editorSlice.actions;

export const selectEditor = state => state.editor;
export const selectEditing = state => state.editor.editing;

export default editorSlice.reducer;
