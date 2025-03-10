import { DataTable } from '../../../components/organisms/Table/DataTable';
import { Plus, Trash2, HardDriveDownload, HardDriveUpload, Settings } from 'lucide-react';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { Button } from '../../../components/atoms/Button/Button';
import { ButtonDropDown } from '../../../components/molecules/ButtonDropDown/ButtonDropDown';
import { useState } from 'react';
import { DropDownExport } from '../../../components/molecules/ButtonDropDown/DropDownExport';
import { TrainingsColumnsType, TrainingsListColumnsSwitch } from './TrainingsListColumnsSwitch';
import { columns, rows } from './TrainingsListData';

export const TrainingsList = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showColumns, setShowColumns] = useState<TrainingsColumnsType>({
    company: true,
    trainingType: true,
    trainingForm: true,
    trainingDate: true,
    trainingValidity: true,
  });

  return (
    <div className="list__company__container">
      <h2 className="Header__2">Szkolenia</h2>
      <div className="list__company__wrapper">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '2rem',
          }}
        >
          <h3 className="Header__3">Szkolenia</h3>
          <ButtonDropDown
            buttonText={'Kolumny'}
            buttonClass={'button--none'}
            buttonIcon={<Settings size={18} />}
            dropDownChildren={<TrainingsListColumnsSwitch setColumnsSwitch={setShowColumns} />}
            showArrow={false}
          ></ButtonDropDown>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <InputText
            style={{ marginRight: '2rem' }}
            placeholder={'Szukaj po numerze...'}
            value={setSearchText}
          />
          <Button
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
            Nowe szkolenie
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
