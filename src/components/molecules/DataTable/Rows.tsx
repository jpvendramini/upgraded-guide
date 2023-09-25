import React from 'react';
import { AligmentStyleType, ColumnType, RowType } from './types';

type Props = {
  rows: RowType[];
  align: AligmentStyleType;
  columns: ColumnType[];
};

const Rows: React.FC<Props> = ({
  align,
  rows,
  columns,
}) => {
  const getRowItem = (row: RowType, index: number) => {
    if (!Object.keys(row)[index]) return '';
    return row[Object.keys(row)[index]];
  };

  return (
    <>
      {rows.map((row, index) => (
        <div
          className={`${index === 0 ? "border-[#FFFFFF]": "border-[#666666]"} bg-[#1f232a] flex justify-between items-center border-t border-solid  w-full p-5 text-sm font-normal text-bg-default font-sans hover:shadow-level-0 transition-all duration-300 ease-out`}
          key={`${`${index}row`}`}
        >
          {columns.map((column, i) => (
            <div
              key={`${`${i}row item`}`}
              style={{ width: column?.width }}
              className={`flex ${column?.width ? 'flex-auto' : 'flex-1'
                } items-center py-0 px-1 ${columns[i] && align[columns[i].alignment]
                } text-[#FFFFFF] whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {getRowItem(row, i)}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Rows;
