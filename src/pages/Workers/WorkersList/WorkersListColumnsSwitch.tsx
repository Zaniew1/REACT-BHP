import { useEffect, useState } from 'react';
import { InputCheckbox } from '../../../components/molecules/Input/Checkbox/InputCheckbox';
import { ListColumnsSwitchType } from '../../../components/organisms/Table/DataTable';

export type WorkersColumnsType = {
  adress: boolean;
  company: boolean;
  position: boolean;
  validityTrainingPeriodical: boolean;
  validityTrainingEntry: boolean;
  validityMedicalExamination: boolean;
  status: boolean;
};
export const WorkersListColumnsSwitch = ({
  setColumnsSwitch,
}: ListColumnsSwitchType<WorkersColumnsType>) => {
  const [inputAdress, setInputAdress] = useState<boolean>(true);
  const [inputCompany, setInputCompany] = useState<boolean>(false);
  const [inputPosition, setInputPosition] = useState<boolean>(false);
  const [inputPeriodical, setInputPeriodical] = useState<boolean>(true);
  const [inputEntry, setInputEntry] = useState<boolean>(true);
  const [inputMedicalExamintaion, setInputMedicalExamintaion] = useState<boolean>(true);
  const [inputStatus, setInputStatus] = useState<boolean>(true);
  useEffect(() => {
    setColumnsSwitch({
      adress: inputAdress,
      company: inputCompany,
      position: inputPosition,
      validityTrainingPeriodical: inputPeriodical,
      validityTrainingEntry: inputEntry,
      validityMedicalExamination: inputMedicalExamintaion,
      status: inputStatus,
    });
  }, [
    inputAdress,
    inputCompany,
    inputPosition,
    inputEntry,
    inputPeriodical,
    inputMedicalExamintaion,
    inputStatus,
    setColumnsSwitch,
  ]);
  return (
    <div className={'company__filter__area'}>
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputAdress}
        value={setInputAdress}
        labelText={'Adres'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputCompany}
        value={setInputCompany}
        labelText={'Firma'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputPosition}
        value={setInputPosition}
        labelText={'Stanowisko'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputPeriodical}
        value={setInputPeriodical}
        id={'company__filter__area__coworkers'}
        labelText={'Szkolenie wstępne'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputEntry}
        value={setInputEntry}
        labelText={'Szkolenia okresowe'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputMedicalExamintaion}
        value={setInputMedicalExamintaion}
        labelText={'Badania lekarskie'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputStatus}
        value={setInputStatus}
        labelText={'Status'}
      />
    </div>
  );
};
