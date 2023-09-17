import { makeStyles } from '@mui/styles';

export const styles = makeStyles((theme) => ({
  root: {
    padding: '0px',
    '&:hover': {
      padding: '0px',
    },
  },
  ul: {
    '& .MuiPaginationItem-root': {
      color: theme.palette.grey[500],
      fontFamily: theme.fontFamily.neutral,
      fontSize: theme.fontSize.xxs,
      fontWeight: theme.fontWeight.bold,
      lineHeight: theme.lineHeight.longText,
      '&:hover': {
        color: "#666666",
        backgroundColor: theme.palette.background.light.light,
      },
      '&.Mui-selected': {
        color: theme.palette.background.light.light,
        '&:hover': {
          backgroundColor: theme.palette.background.light.light,
        },
      },
      '& .MuiPaginationItem-icon': {
        color: theme.palette.background.light.light,
      },
      '&.Mui-disabled': {
        color: theme.palette.grey[500],
        opacity: 1,
        '& .MuiPaginationItem-icon': {
          color: theme.palette.grey[500],
        },
      },
    },
  },
}));
