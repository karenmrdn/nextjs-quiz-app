import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnswersState {
  answers: { [questionId: string]: string };
}

const initialState: AnswersState = {
  answers: {},
};

export const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addNewAnswer: (
      state,
      action: PayloadAction<{ questionId: string; answerId: string }>
    ) => {
      state.answers[action.payload.questionId] = action.payload.answerId;
    },
  },
});

export const { addNewAnswer } = answersSlice.actions;

export default answersSlice.reducer;
