import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    app: null,
  },
  reducers: {
    login: (state, action) => {
      state.app = action.payload;
    },
    logout: state => {
      state.app = null
    }
  },
});

export const { logout, login } = appSlice.actions;

export const selectApp = state => state.app.app;

export default appSlice.reducer;
