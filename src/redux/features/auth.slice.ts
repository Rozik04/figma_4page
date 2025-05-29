import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
