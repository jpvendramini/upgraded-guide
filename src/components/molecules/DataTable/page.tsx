import * as React from 'react';
import Header from './Header';
import Rows from './Rows';
import { ALIGMENT_STYLE, ColumnType, RowType } from './types';

type Props = {
  rows: RowType[];
  columns: ColumnType[];
};

const DataTable = ({ rows, columns }: Props) => {
  return (
    <div className='w-full'>
      <Header
        align={ALIGMENT_STYLE}
        colmuns={columns}
        rows={rows}
      />
      <Rows
        align={ALIGMENT_STYLE}
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default DataTable;
