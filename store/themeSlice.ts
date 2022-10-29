import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export type ThemeState = {
  value:"light" | "dark";
}

const initialState = {
  value:'light'
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers:{
    changeTheme:state=>{
        state.value = state.value === "light" ? "dark" : "light"
    },
    changeToDark:state=>{
      state.value = "dark"
    }
  }
});

export const {changeTheme, changeToDark} = themeSlice.actions;

export const themeValue = (state:RootState) => state.theme.value;

export default themeSlice.reducer;