import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { publicRequest, userRequest } from "../requestsMethods";

export const login = createAsyncThunk(
    "user/login",
    async (user, { rejectWithValue }) => {
        try {
            const res = await publicRequest.post("/auth/login", user);
            return res.data 
        }
        catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);
  
const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: {
            status: false,
            message: ""
        }
    },
    reducers: {
        logout: (state) => {
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isFetching = true;
                state.error.status = false;
                state.error.message = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isFetching = false;
                state.currentUser = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isFetching = false;
                state.error.message = action.payload;
                state.error.status = true;
            })
      }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;