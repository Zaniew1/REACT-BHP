import { DataTable } from '../../../components/organisms/Table/DataTable';
import { Plus, Trash2, HardDriveDownload, HardDriveUpload, Settings } from 'lucide-react';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { Button } from '../../../components/atoms/Button/Button';
import { ButtonDropDown } from '../../../components/molecules/ButtonDropDown/ButtonDropDown';
import { useState } from 'react';
import { DropDownExport } from '../../../components/molecules/ButtonDropDown/DropDownExport';
import { WorkersColumnsType, WorkersListColumnsSwitch } from './WorkersListColumnsSwitch';

import { columns, rows } from './WorkersListData';

export const WorkersList = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showColumns, setShowColumns] = useState<WorkersColumnsType>({
    adress: true,
    company: false,
    position: false,
    validityTrainingPeriodical: true,
    validityTrainingEntry: true,
    validityMedicalExamination: true,
    status: true,
  });

  return (
    <div className="list__company__container">
      <h2 className="Header__2">Pracownicy</h2>
      <div className="list__company__wrapper">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '2rem',
          }}
        >
          <h3 className="Header__3">Pracownicy</h3>
          <ButtonDropDown
            buttonText={'Kolumny'}
            buttonClass={'button--none'}
            buttonIcon={<Settings size={18} />}
            dropDownChildren={<WorkersListColumnsSwitch setColumnsSwitch={setShowColumns} />}
            showArrow={false}
          ></ButtonDropDown>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <InputText
            style={{ marginRight: '2rem' }}
            placeholder={'Szukaj po nazwie...'}
            id={'list__company__search'}
            value={setSearchText}
          />
          <Button
            id={'list__company__delete'}
            disabled={selectedRows.length === 0 ? true : false}
            onClick={() => {
              // useDeleteCompany(selectedRows);
            }}
            class="button--red"
          >
            <Trash2 />
            Usuń
          </Button>
          <ButtonDropDown
            id={'list__company__export'}
            buttonText={'Export'}
            buttonIcon={<HardDriveUpload />}
            dropDownChildren={<DropDownExport />}
            showArrow={true}
          ></ButtonDropDown>
          <Button onClick={() => {}} class="button--gray">
            <HardDriveDownload />
            Import
          </Button>
          <Button onClick={() => {}} class="button--blue">
            <Plus />
            Nowy pracownik
          </Button>
        </div>
        <DataTable
          columns={columns}
          rows={rows}
          filterColumns={showColumns}
          searchText={searchText}
          getSelectedRows={setSelectedRows}
        />
      </div>
    </div>
  );
};
