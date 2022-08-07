import React, { useMemo } from 'react';
import { usePagination, useTable } from 'react-table';
import { columns } from './Columns';
import './TableEmployee.scss';

/**
 * @description component Table employee
 * @component
 *
 * @returns {Reactnode}   jsx injected in DOM
 */

const TableEmployee = ({ tableData }) => {
  // useMemo HOOK to avoid re-rendering until the data changes
  const tableColumns = useMemo(() => columns, []);
  // Table instance
  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    usePagination,
  );
  //proprité du table :TABLE PROPS to define table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    page,
    gotoPage,
    pageCount,
    setPageSize,

    prepareRow,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      <table className="emloyee-table" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(header => (
                <th {...header.getHeaderProps()}>{header.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td tabInde="0" {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* pagination */}
      <div className="table-pagination">
        <div>
          <select
            tabIndex="0"
            className="page-size"
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}>
            {[10, 25, 50, 100].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                show{pageSize}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span>
            Page {''}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
            {''}
          </span>
          <span>
            | go to page{''}
            <input
              className="page-number"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>
          <div className="pagination-button">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              aria-label="go to first page">
              {'<<'}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              aria-label="go to previous page">
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              aria-label="go to next page">
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              aria-label="go to last page">
              {'>>'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableEmployee;
