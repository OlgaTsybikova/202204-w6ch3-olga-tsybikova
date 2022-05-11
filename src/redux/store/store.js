const { configureStore } = require("@reduxjs/toolkit");
const { default: phoneReducer } = require("../feature/phoneSlice");

const store = configureStore({ reducer: { phone: phoneReducer } });
export default store;
