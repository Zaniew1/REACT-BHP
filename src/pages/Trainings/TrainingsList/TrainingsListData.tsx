import { GridColDef } from '@mui/x-data-grid';
import { TableActions } from '../../../components/organisms/Table/TableActions';
import { Link } from '../../../components/atoms/Link/Link';

export const columns: GridColDef[] = [
  {
    field: 'number',
    headerName: 'Numer',
    disableColumnMenu: true,
    flex: 0.4,
    type: 'string',
    resizable: true,
    filterable: false,
    renderCell: (param) => (
      <Link class={`link linkList`} href={`/firmy/${param.id}`}>
        {param.value}
      </Link>
    ),
  },
  {
    field: 'company',
    headerName: 'Firma',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
  },
  {
    field: 'trainingType',
    headerName: 'Rodzaj szkolenia',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
  },
  {
    field: 'trainingForm',
    headerName: 'Forma szkolenia',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
  },
  {
    field: 'trainingDate',
    headerName: 'Data szkolenia',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
  },
  {
    field: 'trainingValidity',
    headerName: 'Data ważności',
    disableColumnMenu: true,
    type: 'string',
    flex: 0.5,
    resizable: true,
    filterable: false,
  },
  {
    field: 'Akcje',
    description:
      'Ta kolumna zawiera akcje, które można wykonać na elemencie  np: podgląd, edycję, usunięcie itp.',
    sortable: false,
    disableColumnMenu: true,
    width: 120,
    filterable: false,
    resizable: true,
    renderCell: (param) => (
      <TableActions id={String(param.id)} oper={'firmy'} showAdditionalOptions={true} />
    ),
  },
];
export type TrainingRowsType = {
  id: number;
  number: string;
  company: string;
  trainingType: string;
  trainingForm: string;
  trainingDate: Date;
  trainingValidity: Date;
};

export const rows: TrainingRowsType[] = [
  {
    id: 1,
    number: '1',
    company: 'Jon',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 2,
    number: '2',
    company: 'Cersei',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 3,
    number: '3',
    company: 'Jaime',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 4,
    number: '4',
    company: 'Arya',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 5,
    number: '5',
    company: 'Daenerys',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 6,
    number: '6',
    company: 'Daenerys',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 7,
    number: '7',
    company: 'Ferrara',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 8,
    number: '8',
    company: 'Rossini',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
  {
    id: 9,
    number: '9',
    company: 'Harvey',
    trainingType: '12312312366',
    trainingForm: '12312312366',
    trainingDate: new Date(),
    trainingValidity: new Date(),
  },
];
