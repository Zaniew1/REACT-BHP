import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import { CompactTable } from '@table-library/react-table-library/compact';
import { forwardRef } from 'react';
import { useSort } from '@table-library/react-table-library/sort';
import { useRowSelect } from '@table-library/react-table-library/select';
const nodes = [
  {
    id: '0',
    name: 'Zan-it',
    adress: 'Klepacze 15-635 polna 11',
    nip: 'TASK',
    coworkers: true,
  },
];

const COLUMNS = [
  { label: 'Nazwa', renderCell: (item) => item.name, sort: { sortKey: 'TASK' }, select: true },
  {
    label: 'Adres',
    renderCell: (item) => item.adress,
    sort: { sortKey: 'DEADLINE' },
  },
  { label: 'NIP', renderCell: (item) => 'PL' + item.nip, sort: { sortKey: 'TYPE' } },
  {
    label: 'Współpracownicy',
    renderCell: (item) => item.coworkers,
    sort: { sortKey: 'COMPLETE' },
  },
  { label: 'Akcje', renderCell: (item) => item.id },
];

export const Table = forwardRef((props, ref) => {
  const data = { nodes };

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
        TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
        COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
      },
    },
  );
  const select = useRowSelect(data, {
    onChange: onselectionchange,
  });
  function onSortChange(action, state) {
    console.log(action, state);
  }
  const theme = useTheme({
    HeaderRow: `
        .th {
          background-color: #2b2c3f;
          border-bottom: 1px solid #a0a8ae;
        }
      `,
    BaseCell: `
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }

        padding: 8px 16px;
      `,
  });
  //   const theme = useTheme([
  //     getTheme(),
  //     {
  //       HeaderRow: `
  //               background-color: #2b2c3f;
  //               color: #babad1;
  //               text-transform: uppercase;
  //               font-weight: 300;
  //               border-color: #babad1
  //             `,
  //       Row: `
  //             color: #a0a0c0;
  //             &:hover{
  //                 color: #a0a0c0;
  //             }
  //               &:nth-of-type(odd) {
  //                 background-color: #2b2c3f;
  //               }

  //               &:nth-of-type(even) {
  //                 background-color: #eaf5fd;
  //               }
  //             `,
  //     },
  //   ]);

  return (
    <CompactTable
      ref={ref}
      theme={theme}
      columns={COLUMNS}
      sort={sort}
      select={select}
      data={data}
    />
  );
});
