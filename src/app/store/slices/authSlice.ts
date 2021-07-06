/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    username: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    loginAction: state => {
      state.isAuth = true;
    },
  },
});

export default authSlice;
export const {
  reducer: authReducer,
  actions: { loginAction },
} = authSlice;
