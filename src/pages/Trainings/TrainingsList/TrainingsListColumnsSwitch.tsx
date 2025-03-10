import { useEffect, useState } from 'react';
import { InputCheckbox } from '../../../components/molecules/Input/Checkbox/InputCheckbox';
import { ListColumnsSwitchType } from '../../../components/organisms/Table/DataTable';

export type TrainingsColumnsType = {
  company: boolean;
  trainingType: boolean;
  trainingForm: boolean;
  trainingDate: boolean;
  trainingValidity: boolean;
};
export const TrainingsListColumnsSwitch = ({
  setColumnsSwitch,
}: ListColumnsSwitchType<TrainingsColumnsType>) => {
  const [inputCompany, setInputCompany] = useState<boolean>(true);
  const [inputTrainingType, setInputTrainingType] = useState<boolean>(true);
  const [inputTrainingForm, setInputTrainingForm] = useState<boolean>(true);
  const [inputTrainingDate, setInputTrainingDate] = useState<boolean>(true);
  const [inputTrainingValidity, setInputTrainingValidity] = useState<boolean>(true);
  useEffect(() => {
    setColumnsSwitch({
      company: inputCompany,
      trainingType: inputTrainingType,
      trainingForm: inputTrainingForm,
      trainingDate: inputTrainingDate,
      trainingValidity: inputTrainingValidity,
    });
  }, [
    inputCompany,
    inputTrainingType,
    inputTrainingForm,
    inputTrainingDate,
    inputTrainingValidity,
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
        default={inputTrainingType}
        value={setInputTrainingType}
        labelText={'Rodzaj szkolenia'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputTrainingForm}
        value={setInputTrainingForm}
        labelText={'Forma szkolenia'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputTrainingDate}
        value={setInputTrainingDate}
        labelText={'Data szkolenia'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputTrainingValidity}
        value={setInputTrainingValidity}
        labelText={'Data ważności'}
      />
    </div>
  );
};
