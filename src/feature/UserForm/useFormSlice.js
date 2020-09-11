import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
      user: null,
    },
    reducers: {
      loginSuccess: (state, action) => {
        state.user = action.payload;
      },
      logoutSuccess: state =>  {
        state.user = null;
      },
    },
  });

export default loginSlice.reducer;
export const selectUser = state=> state.user.user;
export const login = ({ username, password }) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
     // dispatch(loginSuccess({username}));
    } catch (e) {
      return console.error(e.message);
    }
  }
  export const logout = () => async dispatch => {
    try {
      // const res = await api.post('/api/auth/logout/')
     // return dispatch(logoutSuccess())
    } catch (e) {
      return console.error(e.message);
    }
  }