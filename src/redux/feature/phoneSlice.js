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
    call: (phone) => ({ ...phone, calling: true }),
  },
});

export const { addDigit: addDigitActionCreator, call: callActionCreator } =
  phoneSlice.actions;
export default phoneSlice.reducer;
