import {
    Body,
    Row,
    Cell,
  } from '@table-library/react-table-library/table';
  import {
    CellSelect,
  } from '@table-library/react-table-library/select';
  import {
    RowStyles,
    CellStyles,
    EvenRowStyles,
    CellSelectStyles,
  } from '../../components/organisms/Table/TableStyles';
  import { Link } from '../../components/atoms/Link/Link';
  import { TableActions } from '../../components/organisms/Table/TableActions';
  import { CompanyType } from './CompanyList';
  type BodyTypes<T> ={
    nodes:T[]
  }
export const CompanyListBody = (props: BodyTypes<CompanyType>) => {
  return (
     <Body>
        {props.nodes.map((item:CompanyType, index: number) => (
            <Row style={index % 2 == 0 ? RowStyles : EvenRowStyles} key={item.id} item={item}>
              <div style={CellSelectStyles}>
                <CellSelect item={item} />
              </div>
              <Cell style={CellStyles}>
                <Link linkHref={'/'}>{item.name}</Link>
              </Cell>
              <Cell style={CellStyles}>{item.adress}</Cell>
              <Cell style={CellStyles}>{item.nip}</Cell>
              <Cell style={CellStyles}>
                <TableActions />
              </Cell>
            </Row>
        ))}
    </Body>
  )
}
