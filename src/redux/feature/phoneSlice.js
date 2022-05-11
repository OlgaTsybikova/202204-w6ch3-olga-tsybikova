import { createSlice } from "@reduxjs/toolkit";
const phoneSlice = createSlice({
  name: "phone",

  initialState: {
    phoneNumber: [],
    calling: false,
  },

  reducers: {
    addDigit: (phone, action) => ({
      ...phone,
      phoneNumber: [...phone.phoneNumber, action.payload],
    }),
  },
});

export const { addDigit: addDigitActionCreator } = phoneSlice.actions;
export default phoneSlice.reducer;
