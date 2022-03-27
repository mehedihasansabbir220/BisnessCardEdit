import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  // begin with null
  isAuthenticated: null,
  loading: true,
  firstTime: false,
  // save all authenticated data here
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    registerSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);

      state.firstTime = true;
      state.isAuthenticated = true;
      state.loading = false;
      state.token = action.payload.token;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);

      state.firstTime = false;
      state.isAuthenticated = true;
      state.loading = false;
      state.token = action.payload.token;
    },
    logout: state => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      state.token = null;
      state.firstTime = false;
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
  },
});

export const {
  setUser,
  registerSuccess,
  loginSuccess,
  logout,
} = authSlice.actions;

export const selectAuth = state => state.auth;
export const selectAuthenticationState = state => state.auth.isAuthenticated;
export const selectAuthLoading = state => state.auth.loading;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;

/* Actions */
/**
 * Load logged in user
 * Use token stored in local storage
 *
 * @returns {dispatch}
 */
export const loadUser = () => async (dispatch, getState) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  if (localStorage.user && localStorage.user != 'null') {
    dispatch(setUser(localStorage.user));
  }

  try {
    // const res = await axios.get('/api/auth');
    // dispatch({
    //   type: USER_LOADED,
    //   payload: res.data,
    // });

    // dummy action because of server unimplementation
    setTimeout(() => {
      dispatch(setUser({
        isActive: true,
      }));
    }, 500);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export default authSlice.reducer;
