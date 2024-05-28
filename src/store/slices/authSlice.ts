import { Auth } from "@/interfaces/auth";
import { User } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Auth = {
  user: null,
  status: "checking",
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<User>) => {
      // state.user = action.payload;
      state.user = action.payload;
      state.status = "authenticated";
      state.errorMessage = null;
    },
    onLogout: (state,action: PayloadAction<string |null>) => {
      // state.user = {};
      state.user = null;
      state.status = "not-authenticated";
      state.errorMessage = action.payload;
    },
    onCheckingCredentials: (state) => {
      state.status = "checking";
      // state.user = {};
      state.user = null;
      state.errorMessage = null;
    },
    clearErrorMessage: ( state ) => {
        state.errorMessage = null;
    },
    updateUser:(state,action: PayloadAction<User>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const {onLogin,onCheckingCredentials,onLogout,clearErrorMessage,updateUser} = authSlice.actions;
