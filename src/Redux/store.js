import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./employee";

export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});
