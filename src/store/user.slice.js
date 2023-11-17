import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
