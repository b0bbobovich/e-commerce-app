import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isLoginDialogOpen: false,
        isRegisterDialogOpen: false
    },
    reducers: {
        openLoginDialog: (state) => {
            state.isRegisterDialogOpen = false;
            state.isLoginDialogOpen = true;
        },
        closeLoginDialog: (state) => {
            state.isLoginDialogOpen = false;
        },
        openRegisterDialog: (state) => {
            state.isLoginDialogOpen = false;
            state.isRegisterDialogOpen = true;
        },
        closeRegisterDialog: (state) => {
            state.isRegisterDialogOpen = false;
        }
    }

})

export const {openLoginDialog, closeLoginDialog, openRegisterDialog, closeRegisterDialog} = modalSlice.actions;
export default modalSlice.reducer;