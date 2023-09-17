import React from 'react';
import { AligmentStyleType, ColumnType, RowType } from './types';

type Props = {
  align: AligmentStyleType;
  rows: RowType[];
  colmuns: ColumnType[];
};

const Header: React.FC<Props> = ({
  align,
  colmuns,
}) => {
  return (
    <header
      className={`text-[#FFFFFF] font-sans text-sm leading-5 w-full font-bold flex items-center p-5`}
    >
      {colmuns.map((column, index) => (
        <div
          className={`flex ${
            column?.width ? 'flex-auto' : 'flex-1'
          } items-center py-0 px-1 ${
            colmuns[index] && align[colmuns[index].alignment]
          }`}
          style={{ width: column?.width ? column?.width : 'auto' }}
          key={`table column ${index.toString()} ${column.title as string}`}
        >
          {column.title}
        </div>
      ))}
    </header>
  );
};

export default Header;
