import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { plPL } from '@mui/x-data-grid/locales';
import { MutableRefObject, useEffect, useState } from 'react';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { CompanyRowsType } from '../../../pages/CompanyList/CompanyListData';
import { darkTheme, tableStyle } from './TableStyle';
const paginationModel = { page: 0, pageSize: 5 };

type DatagridType = {
  columns: GridColDef[];
  rows: CompanyRowsType[];
  apiRef?: MutableRefObject<GridApiCommunity>;
  filterColumns?: { name: boolean; adress: boolean; nip: boolean };
  searchText?: string;
  getSelectedRows?: (value: number[]) => void;
};

export const DataTable = ({
  columns,
  rows,
  apiRef,
  filterColumns,
  getSelectedRows,
  searchText,
}: DatagridType) => {
  const handleSelectionChange = (newSelection: number[] | []) => {
    getSelectedRows(newSelection);
  };
  const [filterBySearch, setFitlerBySearch] = useState<GridFilterModel>({
    items: [],
  });

  useEffect(() => {
    setFitlerBySearch({
      items: [
        {
          field: 'name',
          operator: 'contains',
          value: searchText,
        },
      ],
    });
  }, [searchText]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          apiRef={apiRef}
          localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
          columns={columns}
          rows={rows}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
          columnVisibilityModel={filterColumns}
          filterModel={filterBySearch}
          onFilterModelChange={(model) => setFitlerBySearch(model)}
          sx={tableStyle}
        />
      </Paper>
    </ThemeProvider>
  );
};
