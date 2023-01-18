import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "../requestMethods";

export const login = createAsyncThunk(
  "user/login",
  async (user) => {
    const res = await publicRequest.post("/auth/login", user);
    return res.data
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {state.isFetching = true})
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isFetching = false;
        console.error("Error: ", action.error.message)
        state.error = true;
      })
  }
});

export default userSlice.reducer;

