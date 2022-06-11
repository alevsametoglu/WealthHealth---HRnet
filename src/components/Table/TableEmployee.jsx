import React, { useMemo } from "react";
import { useTable } from "react-table";
import Data from "../../Data/employee_data.json";
import { columns } from "./Columns";
import "./TableEmployee.scss";

const TableEmployee = () => {
  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => [...Data], []);
  const tableInstance = useTable({
    columns: tableColumns,
    data: tableData,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  console.log(tableInstance);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((header) => (
              <th {...header.getHeaderProps()}>{header.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableEmployee;
