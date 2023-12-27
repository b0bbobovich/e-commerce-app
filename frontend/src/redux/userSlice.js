import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { publicRequest } from '../requestsMethods';

export const login = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const res = await publicRequest.post('/auth/login', user);
      return res;
    } catch (err) {
      return err.response
        ? rejectWithValue(err.response.data)
        : rejectWithValue(err.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const res = await publicRequest.post('/auth/register', userData);
      return res;
    } catch (err) {
      return err.response
        ? rejectWithValue(err.response.data)
        : rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload.data;
      })
      .addMatcher(isAnyOf(login.pending, register.pending), (state, action) => {
        state.isFetching = true;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, register.rejected, login.rejected),
        (state, action) => {
          state.isFetching = false;
        }
      );
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
