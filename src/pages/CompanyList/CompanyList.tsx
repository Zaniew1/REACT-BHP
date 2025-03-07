import { DataTable } from '../../components/organisms/Table/Table';
import { Plus, Trash2, HardDriveDownload, HardDriveUpload, Filter } from 'lucide-react';
import { InputText } from '../../components/molecules/Input/Text/InputText';
import { Button } from '../../components/atoms/Button/Button';
import { ButtonDropDown } from '../../components/molecules/ButtonDropDown/ButtonDropDown';
import { useEffect, useRef } from 'react';
import { useGridApiRef } from '@mui/x-data-grid';
import { DropDownExport } from '../../components/molecules/ButtonDropDown/DropDownExport';
import { CompanyListFilters } from './CompanyListFilters';
export type CompanyType = {
  id: number;
  name: string;
  adress: string;
  nip: number;
  coworkers: boolean;
};

export const CompanyList = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const tableRef = useGridApiRef();
  useEffect(() => {
    console.log(tableRef);
  }, [tableRef]);
  return (
    <div className="list__company__container">
      <h2 className="Header__2">Firmy</h2>
      <div className="list__company__wrapper">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '2rem',
          }}
        >
          <h3 className="Header__3">Firmy</h3>
          <ButtonDropDown
            buttonIcon={<Filter />}
            dropDownChildren={<CompanyListFilters />}
          ></ButtonDropDown>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <InputText
            ref={searchRef}
            style={{ marginRight: '2rem' }}
            placeholder={'Szukaj...'}
            id={'list__company__search'}
          />
          <Button disabled={true} onClick={() => {}} class="button--red">
            <Trash2 />
            Usuń
          </Button>
          <ButtonDropDown
            id={'list__company__export'}
            buttonText={'Export'}
            buttonIcon={<HardDriveUpload />}
            dropDownChildren={<DropDownExport />}
          ></ButtonDropDown>
          <Button onClick={() => {}} class="button--gray">
            <HardDriveDownload />
            Import
          </Button>
          <Button onClick={() => {}} class="button--blue">
            <Plus />
            Nowa Firma
          </Button>
        </div>
        <DataTable apiRef={tableRef} />
      </div>
    </div>
  );
};
