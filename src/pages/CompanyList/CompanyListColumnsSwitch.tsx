import { useEffect, useState } from 'react';
import { InputCheckbox } from '../../components/molecules/Input/Checkbox/InputCheckbox';
type CompanyListColumnsSwitchType = {
  setColumnsSwitch: (value: CompanyColumnsType) => void;
};
export type CompanyColumnsType = {
  name: boolean;
  adress: boolean;
  nip: boolean;
};
export const CompanyListColumnsSwitch = ({ setColumnsSwitch }: CompanyListColumnsSwitchType) => {
  const [inputName, setInputName] = useState<boolean>(true);
  const [inputAdress, setInputAdress] = useState<boolean>(true);
  const [inputNip, setInputNip] = useState<boolean>(true);
  useEffect(() => {
    setColumnsSwitch({ name: inputName, adress: inputAdress, nip: inputNip });
  }, [inputName, inputAdress, inputNip, setColumnsSwitch]);
  return (
    <div className={'company__filter__area'}>
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputName}
        value={setInputName}
        id={'company__filter__area__name'}
        labelText={'Nazwa'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputAdress}
        value={setInputAdress}
        id={'company__filter__area__nip'}
        labelText={'Adres'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        default={inputNip}
        value={setInputNip}
        id={'company__filter__area__coworkers'}
        labelText={'Nip'}
      />
    </div>
  );
};
