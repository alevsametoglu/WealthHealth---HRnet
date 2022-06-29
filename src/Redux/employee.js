import { createSlice } from '@reduxjs/toolkit';
import StorageHelper from '../storage';

/**
 * create slice  redux
 */

const employee = createSlice({
  name: 'add',
  initialState: {
    employeeList: StorageHelper.getEmployeeList(),
  },

  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.unshift(action.payload);
      StorageHelper.setEmployeeList(state.employeeList);
    },
  },
});

const employeeAction = employee.actions;
const employeeReducer = employee.reducer;
export { employeeReducer, employeeAction };
