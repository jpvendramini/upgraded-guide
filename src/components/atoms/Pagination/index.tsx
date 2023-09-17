/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import { ThemeProvider } from '@mui/styles';
import { globalTheme } from '@components/utils/theme';
import { styles } from './styles';

type Props = {
  testId?: string;
  count?: number;
  page?: number;
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const PaginationComponent: React.FC<Props> = ({
  count,
  page,
  onChange,
  testId,
}) => {
  const classes = styles();

  return (
    <MuiPagination
      data-testid={testId}
      count={count}
      page={page}
      variant="text"
      onChange={onChange}
      classes={{ root: classes.root, ul: classes.ul }}
    />
  );
};

const Pagination: React.FC<Props> = (props: Props) => (
  <ThemeProvider theme={globalTheme}>
    <PaginationComponent {...props} />
  </ThemeProvider>
);

Pagination.defaultProps = {
  testId: 'pagination',
  count: 0,
  page: 0,
  onChange: undefined,
};

PaginationComponent.defaultProps = Pagination.defaultProps;

export default Pagination;
