import React from "react";
import { SearchInput, TableEmployee } from "../components";
import "./EmployeList.scss";

const EmployeListPage = () => {
  return (
    <main className="employe-list" aria-label="employee list page">
      <h1>Employee List</h1>
      <section>
        <SearchInput />
      </section>
      <TableEmployee />
    </main>
  );
};

export default EmployeListPage;
