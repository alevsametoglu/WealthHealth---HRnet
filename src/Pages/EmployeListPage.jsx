import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput, TableEmployee } from '../components';
import { employeeAction } from '../Redux/employee';
import './EmployeList.scss';

const EmployeListPage = () => {
  const employeState = useSelector(state => state.employee);
  const [filteredList, setFilteredList] = useState(employeState.employeeList);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const list = !searchText
      ? employeState.employeeList
      : employeState.employeeList.filter(employe =>
          Object.values(employe)
            .join(' ')
            .toLowerCase()
            .includes(searchText.toLowerCase()),
        );
    setFilteredList(list);
  }, [searchText, employeState.employeeList]);

  return (
    <main className="employe-list" aria-label="employee list page">
      <h1>Employee List</h1>
      <section>
        <SearchInput onSearch={setSearchText} />
      </section>
      <TableEmployee tableData={filteredList} />
    </main>
  );
};

export default EmployeListPage;
