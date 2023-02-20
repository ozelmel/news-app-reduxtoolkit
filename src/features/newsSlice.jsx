import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    
  },
});

// export const { setUser, clearUser } = authSlice.actions;

export default newsSlice.reducer;
