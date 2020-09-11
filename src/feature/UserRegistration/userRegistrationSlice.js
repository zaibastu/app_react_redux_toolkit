import { createSlice } from '@reduxjs/toolkit';

export const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
      user: null,
    },
    reducers: {
      registrationSuccess: (state, action) => {
        state.user = action.payload;
      }
    },
  });

export default registrationSlice.reducer;

export const registration = ({ username, password }) => async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      //dispatch(registrationSuccess({username}));
    } catch (e) {
      return console.error(e.message);
    }
  }
  