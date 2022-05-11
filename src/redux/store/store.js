import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../feature/phoneSlice";

const store = configureStore({ reducer: { phone: phoneReducer } });
export default store;
