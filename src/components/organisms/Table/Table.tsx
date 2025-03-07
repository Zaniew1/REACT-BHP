import { DataGrid, GridColDef, useGridApiRef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { TableActions } from './TableActions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from '../../atoms/Link/Link';
import { plPL } from '@mui/x-data-grid/locales';
import { forwardRef, MutableRefObject, RefObject, useRef, useState } from 'react';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nazwa',
    disableColumnMenu: true,
    flex: 1.5,
    resizable: false,
    renderCell: (param) => (
      <Link class={`link linkList`} href={`/firmy/${param.id}`}>
        {param.value}
      </Link>
    ),
  },
  { field: 'adress', headerName: 'Adres', disableColumnMenu: true, flex: 1, resizable: true },
  {
    field: 'nip',
    headerName: 'NIP',
    disableColumnMenu: true,
    type: 'number',
    flex: 0.5,
    resizable: false,
  },
  {
    field: 'Akcje',
    description:
      'Ta kolumna zawiera akcje, które można wykonać na elemencie  np: edycję, pogląd, usunięcie itp.',
    sortable: false,
    disableColumnMenu: true,
    width: 160,
    resizable: false,
    renderCell: (param) => (
      <TableActions id={String(param.id)} oper={'firmy'} showAdditionalOptions={true} />
    ),
  },
];
const darkTheme = createTheme({
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

const rows = [
  { id: 1, name: 'Snow', adress: 'Jon', nip: 12312312366 },
  { id: 2, name: 'Lannister', adress: 'Cersei', nip: 12312312366 },
  { id: 3, name: 'Lannister', adress: 'Jaime', nip: 12312312366 },
  { id: 4, name: 'Stark', adress: 'Arya', nip: 12312312366 },
  { id: 5, name: 'Targaryen', adress: 'Daenerys', nip: 12312312366 },
  { id: 6, name: 'Melisandre', adress: 'Daenerys', nip: 12312312366 },
  { id: 7, name: 'Clifford', adress: 'Ferrara', nip: 12312312366 },
  { id: 8, name: 'Frances', adress: 'Rossini', nip: 12312312366 },
  { id: 9, name: 'Roxie', adress: 'Harvey', nip: 12312312366 },
];

const paginationModel = { page: 0, pageSize: 5 };
type DatagridType = {
  apiRef: MutableRefObject<GridApiCommunity>;
};
export const DataTable = (props: DatagridType) => {
  const [selection, setSelection] = useState<number[] | []>([]);
  const handleSelectionChange = (newSelection: number[] | []) => {
    setSelection(newSelection);
  };
  console.log('Selected rows:', selection);
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          apiRef={props.apiRef}
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
          sx={{
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
          }}
        />
      </Paper>
    </ThemeProvider>
  );
};
