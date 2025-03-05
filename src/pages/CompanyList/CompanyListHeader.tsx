import {
    Header,
    HeaderRow,
    HeaderCell,
  } from '@table-library/react-table-library/table';
import {
    HeaderCellSelect,
  } from '@table-library/react-table-library/select';
  import {
    HeaderStyles,
    HeaderCellStyles,
    HeaderRowStyles,
    HeaderSelectRowStyles,
  } from '../../components/organisms/Table/TableStyles';
  import { HeaderCellSort} from '@table-library/react-table-library/sort';
export const CompanyListHeader = () => {
  return (
     <Header style={HeaderStyles}>
        <HeaderRow style={HeaderRowStyles}>
            <HeaderCellSelect style={HeaderSelectRowStyles} />
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
  )
}
