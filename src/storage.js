import defaultEmployeeList from './Data/employee_data.json';

const getEmployeeList = () => {
  const data = localStorage.getItem('employee-list');
  console.log({ data });
  const list = data === null ? defaultEmployeeList : JSON.parse(data);
  return list;
};
const setEmployeeList = employeeList => {
  localStorage.setItem('employee-list', JSON.stringify(employeeList));
};

const StorageHelper = { getEmployeeList, setEmployeeList };
export default StorageHelper;
