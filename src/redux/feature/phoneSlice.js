import { createSlice } from "@reduxjs/toolkit";
const phoneSlice = createSlice({
  name: "phone",

  initialState: {
    phoneNumber: [],
    calling: false,
  },

  reducers: {
    addDigit: (state, action) => ({
      ...state,
      phoneNumber: [...state.phoneNumber, action.payload],
    }),
  },
});

export const { addDigit: AddDigitActionCreator } = phoneSlice.actions;
export default phoneSlice.reducer;
