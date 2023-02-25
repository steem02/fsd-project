import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';

interface LoginByUserNameParams {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameParams, { rejectValue: string }>(
  'login/submitLogin',
  async (params, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', params);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem('auth_token', JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
