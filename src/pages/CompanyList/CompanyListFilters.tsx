import { InputCheckbox } from '../../components/molecules/Input/Checkbox/InputCheckbox';

export const CompanyListFilters = () => {
  return (
    <div className={'company__filter__area'}>
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        id={'company__filter__area__name'}
        labelText={'Adres'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        id={'company__filter__area__nip'}
        labelText={'Gównooo'}
      />
      <InputCheckbox
        wrapperStyle={{
          transform: 'scale(0.6)',
          marginBottom: '0',
          width: '100%',
          justifyContent: 'flex-start',
        }}
        id={'company__filter__area__coworkers'}
        labelText={'Współpracownicy'}
      />
    </div>
  );
};
