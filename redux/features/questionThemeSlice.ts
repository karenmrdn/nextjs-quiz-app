import { QuestionTheme } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface QuestionThemeState {
  theme: QuestionTheme;
}

const initialState: QuestionThemeState = {
  theme: QuestionTheme.DEFAULT,
};

export const questionThemeSlice = createSlice({
  name: "questionTheme",
  initialState,
  reducers: {
    enableDefaultTheme: (state) => {
      state.theme = QuestionTheme.DEFAULT;
    },
    enableGradientTheme: (state) => {
      state.theme = QuestionTheme.GRADIENT;
    },
  },
});

export const { enableDefaultTheme, enableGradientTheme } =
  questionThemeSlice.actions;

export default questionThemeSlice.reducer;
