import React, { useRef, useState } from 'react';
import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { Button } from '../../../components/atoms/Button/Button';
import { InputPhone } from '../../../components/molecules/Input/Phone/InputPhone';
import { InputEmail } from '../../../components/molecules/Input/Email/InputEmail';
import { InputTextarea } from '../../../components/molecules/Input/Textarea/InputTextarea';
import { Selectr } from '../../../components/molecules/Select/Selectr';
import { InputDate } from '../../../components/molecules/Input/Date/InputDate';
import { SeparatorLine } from '../../../components/atoms/SeparatorLine/SeparatorLine';
import {
  absenceTypes,
  formsOfEmployment,
  positionType,
  yesNoTypes,
} from '../../../assets/selectsOptions';
import { InputNumber } from '../../../components/molecules/Input/Number/InputNumber';

export const WorkerEdit = () => {
  const [toggleData, setToggleData] = useState<1 | 2 | 3 | 4 | 5>(1);
  return (
    <div className="worker__edit">
      <PathInformation
        style={{ marginBottom: '2rem' }}
        visibleSlash={true}
        paragraphText="Edycja pracownika"
        linkText="Pracownicy"
        linkHref="/pracownicy"
      />
      <div className={'worker__edit__wrapper'}>
        <div className="worker__edit__wrapper__main">
          <h3 className="worker__edit__wrapper__main__header">Pracownik</h3>
          <div className={'worker__edit__wrapper__main__basic'}>
            <InputText
              required={true}
              style={{ width: 'auto', height: 'auto', marginRight: '2rem' }}
              labelText="Nazwisko"
              id={'worker__edit__nip'}
            />
            <InputText
              required={true}
              style={{ width: 'auto', marginRight: '2rem' }}
              labelText="Imię"
              id={'worker__edit__nip'}
            />
            <InputText
              required={true}
              style={{ width: 'auto', marginRight: '2rem' }}
              labelText="Drugie imię"
              id={'worker__edit__nip'}
            />
            <Selectr
              options={[
                { value: 'men', label: 'Mężczyzna' },
                { value: 'women', label: 'Kobieta' },
              ]}
              labelText="Płeć"
              id={'worker__edit__sex'}
            />
          </div>
          <SeparatorLine text={'Ważność szkoleń i badań'} />

          <div className={'worker__edit__wrapper__main__info'}>
            <div style={{ width: '25%' }}>
              <InputDate
                mode={'single'}
                required={true}
                labelText="Szkolenie wstępne"
                id={'worker__edit__name'}
              />
            </div>
            <div style={{ width: '25%', margin: '0 2rem' }}>
              <InputDate
                mode={'single'}
                labelText="Szkolenie okresowe"
                id={'worker__edit__regon'}
              />
            </div>
            <div style={{ width: '25%' }}>
              <InputDate mode={'single'} labelText="Badanie lekarskie" id={'worker__edit__pkd'} />
            </div>
          </div>
          <SeparatorLine text={'Pozostałe dane'} />
          <div className={'worker__edit__wrapper__main__rest'}>
            <div className={'worker__edit__wrapper__main__rest__buttons'}>
              <Button
                class={`${toggleData == 1 ? 'button--blue' : 'button--none'}`}
                onClick={() => setToggleData(1)}
              >
                Dane Firmowe
              </Button>
              <Button
                class={`${toggleData == 2 ? 'button--blue' : 'button--none'}`}
                onClick={() => setToggleData(2)}
              >
                Dane wrażliwe
              </Button>
              <Button
                class={`${toggleData == 3 ? 'button--blue' : 'button--none'}`}
                onClick={() => setToggleData(3)}
              >
                Dane kontaktowe
              </Button>
              <Button
                class={`${toggleData == 4 ? 'button--blue' : 'button--none'}`}
                onClick={() => setToggleData(4)}
              >
                Stanowisko
              </Button>
              <Button
                class={`${toggleData == 5 ? 'button--blue' : 'button--none'}`}
                onClick={() => setToggleData(5)}
              >
                Notatki
              </Button>
            </div>
            <div className={'worker__edit__wrapper__main__rest__data'}>
              <div
                style={{ display: `${toggleData == 1 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
                className={'worker__edit__wrapper__main__rest__data__company'}
              >
                <Selectr
                  isRequired={true}
                  id={''}
                  options={[{ value: '1', label: 'ZanIt' }]}
                  labelText="Firma"
                />
                <Selectr
                  id={''}
                  defaultValue={[{ value: '0', label: 'Wszystkie oddziały' }]}
                  options={[{ value: '0', label: 'Wszystkie oddziały' }]}
                  labelText="Oddział"
                />
                <Selectr id={''} options={formsOfEmployment} labelText="Forma zatrudnienia" />
                <Selectr
                  defaultValue={[{ value: '', label: 'Brak' }]}
                  id={''}
                  options={absenceTypes}
                  labelText="Nieobecność"
                />
              </div>
              <div
                style={{ display: `${toggleData == 2 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
                className={'worker__edit__wrapper__main__rest__data__sensitive'}
              >
                <InputNumber id={'worker__edit__pesel'} labelText="PESEL" />
                <InputText id={'worker__edit__id'} labelText="Nr dowodu os." />
                <InputDate
                  id={'worker__edit__birth__date'}
                  mode="single"
                  labelText="Data urodzenia"
                />
                <InputText id={'worker__edit__birth__place'} labelText="Miejsce urodzenia" />
                <Selectr
                  defaultValue={[{ value: '', label: 'Brak' }]}
                  options={yesNoTypes}
                  labelText="Niepełnosprawność"
                  id={'worker__edit__disability'}
                />
              </div>
              <div
                style={{ display: `${toggleData == 3 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
                className={'worker__edit__wrapper__main__rest__data__contact'}
              >
                <InputText
                  wrapperStyle={{ width: '25%' }}
                  required={true}
                  labelText="KOD pocztowy"
                />
                <InputText
                  wrapperStyle={{ width: '25%', margin: '0 2rem' }}
                  required={true}
                  labelText="Miasto"
                />
                <InputText
                  wrapperStyle={{ width: '30%', flexGrow: '1' }}
                  required={true}
                  labelText="ulica"
                />
                <InputPhone
                  wrapperStyle={{ width: '20%' }}
                  labelText="Numer telefonu"
                  id={'worker__edit__phone'}
                />
                <InputEmail
                  wrapperStyle={{ width: '30%', margin: '0 2rem' }}
                  labelText="Adres email"
                  id={'worker__edit__mail'}
                />
              </div>
              <div
                style={{ display: `${toggleData == 4 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
                className={'worker__edit__wrapper__main__rest__data__position'}
              >
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    gap: '2rem',
                  }}
                >
                  <InputText labelText="Stanowisko" />
                  <Selectr
                    defaultValue={[{ value: '', label: 'Brak' }]}
                    id={''}
                    options={positionType}
                    labelText="Rodzaj"
                  />
                </div>
                <div style={{ display: 'flex', width: '100%', gap: '2rem' }}>
                  <Selectr
                    defaultValue={[{ value: '', label: 'Brak' }]}
                    id={''}
                    options={positionType}
                    labelText="Rodzaj"
                  />
                  <Selectr
                    defaultValue={[{ value: '', label: 'Brak' }]}
                    id={''}
                    options={positionType}
                    labelText="Rodzaj"
                  />
                  <Selectr
                    defaultValue={[{ value: '', label: 'Brak' }]}
                    id={''}
                    options={positionType}
                    labelText="Rodzaj"
                  />
                </div>
                <InputTextarea
                  labelText={'Opis stanowiska'}
                  wrapperStyle={{ width: '100%' }}
                  id={'worker__edit__textarea'}
                />
              </div>
              <div
                style={{ display: `${toggleData == 5 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
                className={'worker__edit__wrapper__main__rest__notes'}
              >
                <InputTextarea wrapperStyle={{ width: '100%' }} id={'worker__edit__textarea'} />
              </div>
            </div>
            <div className={'worker__edit__wrapper__main__rest__save'}>
              <Button style={{ width: '150px' }} class="button--blue" onClick={() => {}}>
                Zapisz
              </Button>
              <Button style={{ width: '150px' }} class="button--gray" onClick={() => {}}>
                Anuluj
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
