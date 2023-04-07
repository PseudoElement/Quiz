import { createSlice } from "@reduxjs/toolkit";
import { Themes } from "../../shared/enums/theme";

const initialState: { theme: Themes } = {
     theme: Themes.DARK,
};

const themeSlice = createSlice({
     name: "theme",
     initialState,
     reducers: {
          changeTheme(state) {
               state.theme = state.theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
               // document.cookie = state.theme === Themes.DARK ? `theme=${Themes.LIGHT}` : `theme=${Themes.DARK}`;
          },
          setTheme(state, action) {
               state.theme = action.payload;
          },
     },
});

export const { changeTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
