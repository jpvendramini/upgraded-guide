/* eslint-disable no-unused-vars */
import React from 'react';

export const ALIGMENT_STYLE = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
};

type ColumnType = {
  title: string | React.ReactNode;
  alignment: 'left' | 'right' | 'center';
  width?: string;
};

type RowType = { [key: string]: string | boolean | React.ReactNode };

type AligmentStyleType = {
  left: string;
  right: string;
  center: string;
};

export type { ColumnType, RowType, AligmentStyleType };
