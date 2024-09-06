import { configureStore } from "@reduxjs/toolkit";

import answersSlice from "./features/answersSlice";
import questionThemeSlice from "./features/questionThemeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      answers: answersSlice,
      questionTheme: questionThemeSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
