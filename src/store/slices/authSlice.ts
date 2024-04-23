import { Auth } from "@/interfaces/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Auth = {
  user: null,
  status: "checking",
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  // initialState: {
  //   status: "checking",
  //   user: {},
  //   errorMessage: undefined,
  // },
  initialState,
  reducers: {
    onLogin: (state, action: PayloadAction<string>) => {
      // state.user = action.payload;
      state.user = action.payload;
      state.status = "authenticated";
      state.errorMessage = undefined;
    },
    onLogout: (state,action: PayloadAction<string |undefined>) => {
      // state.user = {};
      state.user = null;
      state.status = "not-authenticated";
      state.errorMessage = action.payload;
    },
    onCheckingCredentials: (state) => {
      state.status = "checking";
      // state.user = {};
      state.user = null;
      state.errorMessage = undefined;
    },
    clearErrorMessage: ( state ) => {
        state.errorMessage = undefined;
    }
  },
});

// Action creators are generated for each case reducer function
export const {onLogin,onCheckingCredentials,onLogout,clearErrorMessage} = authSlice.actions;
