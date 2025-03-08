import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(105, 108, 255)',
    },
    secondary: {
      main: '#ffffff',
    },
    mode: 'dark',
    background: {
      default: 'rgba(43, 44, 64, 0.96)',
      paper: 'rgba(124, 125, 182, 0.06)',
    },
    text: {
      primary: '#a0a0c0',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(43, 44, 64, 0.96)',
          backgroundImage: 'none',
          height: '100% !important',
        },
      },
    },
  },
});
export const tableStyle = {
  '& .MuiDataGrid-row': {
    fontSize: '1.2rem !important',
  },
  '& .MuiDataGrid-row:hover': {
    cursor: 'pointer',
  },
  '& .MuiDataGrid-row:nth-of-type(odd)': {
    backgroundColor: 'rgba(52, 54, 77, 1)',
  },
  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: 'rgba(52, 54, 77, 0.3)',
  },
  '& .MuiDataGrid-columnHeaderTitleContainer': {
    flexDirection: 'row !important',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    color: '#babad1',
  },
  '& .MuiDataGrid-cell': {
    borderRight: '1px solid rgba(81, 81, 81, 1)',
    borderCollapse: 'collapse',
  },
  '& .MuiDataGrid-filterIcon': {
    display: 'none',
  },
  '& .MuiDataGrid-scrollbar::-webkit-scrollbar': {
    height: '0.5rem',
    width: '0.5rem',
    backgroundColor: 'yellow',
  },
  '& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgb(105, 108, 255)',
  },

  '& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'rgb(91, 94, 252)',
    cursor: 'pointer',
  },
  '& .MuiDataGrid-scrollbar::-webkit-scrollbar-track': {
    backgroundColor: '#666',
  },
};
