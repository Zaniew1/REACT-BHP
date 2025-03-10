import { GridColDef } from '@mui/x-data-grid';
import { TableActions } from '../../../components/organisms/Table/TableActions';
import { Link } from '../../../components/atoms/Link/Link';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nazwisko i Imię',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
    renderCell: (param) => (
      <Link class={`link linkList`} href={`/pracownicy/${param.id}`}>
        {param.value}
      </Link>
    ),
  },
  {
    field: 'adress',
    headerName: 'Adres',
    type: 'string',
    disableColumnMenu: true,
    flex: 0.4,
    resizable: true,
  },
  {
    field: 'company',
    headerName: 'Firma',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: false,
    filterable: true,
  },
  {
    field: 'position',
    headerName: 'Stanowisko',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
  },
  {
    field: 'validityTrainingPeriodical',
    headerName: 'Szkolenia wstępne',
    disableColumnMenu: true,
    type: 'date',
    flex: 0.3,
    resizable: true,
    filterable: false,
  },
  {
    field: 'validityTrainingEntry',
    headerName: 'Szkolenia okresowe',
    disableColumnMenu: true,
    type: 'date',
    flex: 0.3,
    resizable: true,
    filterable: false,
  },
  {
    field: 'validityMedicalExamination',
    headerName: 'Ważność badań lekarskich',
    disableColumnMenu: true,
    type: 'date',
    flex: 0.3,
    resizable: true,
    filterable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.3,
    resizable: true,
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
    resizable: true,
    renderCell: (param) => (
      <TableActions id={String(param.id)} oper={'pracownicy'} showAdditionalOptions={true} />
    ),
  },
];

//////////// DO ZMIANY
export type WorkersRowsType = {
  id: number;
  name: string;
  adress: string;
  nip: number;
};
export const rows: WorkersRowsType[] = [
  { id: 1, name: 'Jon Snow', adress: 'Klepacze 15-635 ul.Polna 11 ', nip: 12312312366 },
  { id: 2, name: 'Tyrion Lannister', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 3, name: 'Jamie Lannister', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 4, name: 'Rob Stark', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 5, name: 'Daenerys Targaryen', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 6, name: 'Clifford Melisandre', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 7, name: 'Ferrara Clifford', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 8, name: 'Rossini Frances', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
  { id: 9, name: 'Roxie Harvey', adress: 'Klepacze 15-635 ul.Polna 11', nip: 12312312366 },
];
