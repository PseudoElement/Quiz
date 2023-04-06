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
          },
     },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
