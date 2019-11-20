import cx from 'classnames';
import React from 'react';
import RCTable from 'rc-table';
import { TableProps as RCTableProps } from 'rc-table/lib/Table';
import NDTable from './nd-table';
import NDBodyRow from './nd-body-row';
import './table.css';

interface TableProps extends RCTableProps {}

export const Table: React.FC<TableProps & any> = props => {
  return (
    <div className="clickableRows">
      <RCTable
        {...props}
        components={{
          table: NDTable,
          body: {
            row: NDBodyRow,
          },
        }}
      />
    </div>
  );
};

export default Table;
