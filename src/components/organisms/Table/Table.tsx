import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
  HeaderCell,
} from '@table-library/react-table-library/table';
import { forwardRef } from 'react';
import {
  HeaderCellSelect,
  CellSelect,
  useRowSelect,
} from '@table-library/react-table-library/select';
import { nodes } from './TableCompany';
import {
  TableStyles,
  HeaderStyles,
  HeaderCellStyles,
  HeaderRowStyles,
  RowStyles,
  CellStyles,
  EvenRowStyles,
  HeaderSelectRowStyles,
  CellSelectStyles,
} from './TableStyles';
import { HeaderCellSort, useSort } from '@table-library/react-table-library/sort';
import { Link } from '../../atoms/Link/Link';
import { ArrowDown, ArrowDownUp, ArrowUp } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';
type NodesType = {
  id: number;
  name: string;
  adress: string;
  nip: number;
  coworkers: boolean;
}[];
type TableType = {
  id: number;
  pagination?: boolean;
  sorting?: boolean;
  nodes?: NodesType;
  columns?: [];
  limit?: number;
};
export const MyTable = forwardRef((_props: TableType, ref) => {
  const data = { nodes };
  // const LIMIT = 2;

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        margin: '0px',
        iconDefault: <ArrowDownUp />,
        iconUp: <ArrowUp />,
        iconDown: <ArrowDown />,
      },
      sortFns: {
        ID: (array) => array.sort((a, b) => Number(a.id) - Number(b.id)),
        NAME: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        ADRESS: (array) => array.sort((a, b) => a.adress.localeCompare(b.adress)),
        NIP: (array) => array.sort((a, b) => Number(a.nip) - Number(b.nip)),
      },
    },
  );
  function onSortChange(action, state) {
    console.log(action, state);
  }
  const handle = () => {};
  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });
  function onSelectChange(action, state) {
    console.log(action, state);
  }
  return (
    <>
      <label htmlFor="search">
        Search by Task:&nbsp;
        <input id="search" type="text" value={''} onChange={handle} />
      </label>
      <br />

      <Table style={TableStyles} ref={ref} data={data} sort={sort} select={select}>
        {(nodes: NodesType) => (
          <>
            <Header style={HeaderStyles}>
              <HeaderRow style={HeaderRowStyles}>
                <HeaderCellSelect style={HeaderSelectRowStyles} />
                <HeaderCellSort style={HeaderCellStyles} sortKey="ID">
                  Id
                </HeaderCellSort>
                <HeaderCellSort style={HeaderCellStyles} sortKey="NAME">
                  Nazwa
                </HeaderCellSort>
                <HeaderCellSort style={HeaderCellStyles} sortKey="ADRESS">
                  Adres
                </HeaderCellSort>
                <HeaderCellSort style={HeaderCellStyles} sortKey="NIP">
                  NIP
                </HeaderCellSort>
                <HeaderCell style={HeaderCellStyles}>Akcje</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {nodes.map((item, index: number) => (
                <Row style={index % 2 == 0 ? RowStyles : EvenRowStyles} key={item.id} item={item}>
                  <div style={CellSelectStyles}>
                    <CellSelect item={item} />
                  </div>
                  <Cell style={CellStyles}>{item.id}</Cell>
                  <Cell style={CellStyles}>
                    <Link linkHref={'/'}>{item.name}</Link>
                  </Cell>
                  <Cell style={CellStyles}>{item.adress}</Cell>
                  <Cell style={CellStyles}>{item.nip}</Cell>
                  <Cell style={CellStyles}>
                    <span>
                      <Button onClick={() => {}} type={'button'} />
                    </span>
                  </Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
});
