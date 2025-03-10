import { GridColDef } from '@mui/x-data-grid';
import { TableActions } from '../../../components/organisms/Table/TableActions';
import { Link } from '../../../components/atoms/Link/Link';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nazwa',
    disableColumnMenu: true,
    flex: 1.5,
    resizable: false,
    filterable: false,
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
    filterable: false,
  },
  {
    field: 'Akcje',
    description:
      'Ta kolumna zawiera akcje, które można wykonać na elemencie  np: edycję, pogląd, usunięcie itp.',
    sortable: false,
    disableColumnMenu: true,
    width: 120,
    filterable: false,
    resizable: false,
    renderCell: (param) => (
      <TableActions id={String(param.id)} oper={'firmy'} showAdditionalOptions={true} />
    ),
  },
];
export type CompanyRowsType = {
  id: number;
  name: string;
  adress: string;
  nip: number;
};
export const rows: CompanyRowsType[] = [
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
