import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest, userRequest } from "../requestMethods";

export const login = createAsyncThunk(
  "user/login",
  async (user) => {
    const res = await publicRequest.post("/auth/login", user);
    return res.data
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    users: []
  },
  reducers: {
    // LOGOUT
    logout: (state) => {
      state.currentUser = null;
    },
    //GET ALL
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
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

export const {
  logout
} = userSlice.actions;

export default userSlice.reducer;

