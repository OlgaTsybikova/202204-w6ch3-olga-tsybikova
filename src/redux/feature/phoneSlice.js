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
    removeLastDigit: (phone) => ({
      ...phone,
      phoneNumber: [...phone.phoneNumber.slice(0, -1)],
    }),
  },
});

export const {
  addDigit: addDigitActionCreator,
  call: callActionCreator,
  removeLastDigit: removeLastDigitActionCreator,
} = phoneSlice.actions;
export default phoneSlice.reducer;
