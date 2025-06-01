import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  email?: string;
  password?: string;
}

const initialState: AuthState = JSON.parse(
  sessionStorage.getItem("auth-data") || "{}"
) || {
  email: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      sessionStorage.setItem("auth-data", JSON.stringify(state));
    },
    clearAuth: (state) => {
      state.email = "";
      state.password = "";
      sessionStorage.removeItem("auth-data");
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
