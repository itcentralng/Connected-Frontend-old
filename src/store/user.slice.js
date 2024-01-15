import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      console.log(action.payload);
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
    cleardb: (state) => {
      fetch(`${process.env.REACT_APP_API_URL}/cleardb`).then((res) =>
        console.log("cleared")
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
