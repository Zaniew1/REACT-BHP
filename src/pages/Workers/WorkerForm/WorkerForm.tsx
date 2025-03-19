import { LegacyRef, useRef, useState } from 'react';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { Button } from '../../../components/atoms/Button/Button';
import { InputPhone } from '../../../components/molecules/Input/Phone/InputPhone';
import { InputEmail } from '../../../components/molecules/Input/Email/InputEmail';
import { InputTextarea } from '../../../components/molecules/Input/Textarea/InputTextarea';
import { Selectr, SelectType } from '../../../components/molecules/Select/Selectr';
import { InputDate } from '../../../components/molecules/Input/Date/InputDate';
import { SeparatorLine } from '../../../components/atoms/SeparatorLine/SeparatorLine';
import {
  absenceTypes,
  formsOfEmployment,
  positionType,
  yesNoTypes,
} from '../../../assets/selectsOptions';
import { InputNumber } from '../../../components/molecules/Input/Number/InputNumber';
import { CompanyType } from '../../Companies/CompaniesList/CompaniesList';
import { SelectInstance } from 'react-select';
import ReactQuill from 'react-quill-new';

type WorkerType = {
  name: string;
  surname: string;
  secondName?: string;
  sex?: string;
  trainingEntry?: Date;
  trainingPeriodic?: Date;
  medicalExamination?: Date;
  company?: CompanyType;
  department?: string;
  employmentForm?: string;
  absence?: string;
  pesel?: number;
  IdCardNumber?: string;
  dateOfBirth?: Date;
  placeOfBirth?: string;
  disability?: boolean;
  postalCode?: string;
  city?: string;
  street?: string;
  phoneNumber?: number;
  email?: string;
  position?: string;
  positionType?: string;
  positionSection?: string;
  positionNotes: string;
  youth?: boolean;
  nightShift?: boolean;
  notes: string;
};
type WorkerFormType = {
  data?: WorkerType;
};

export const WorkerForm = (props: WorkerFormType) => {
  const [toggleData, setToggleData] = useState<1 | 2 | 3 | 4 | 5>(1);
  const inputsRef = useRef<{
    [key: string]: LegacyRef<HTMLInputElement> | null;
  }>({});
  const selectsRef = useRef<{
    [key: string]: LegacyRef<SelectInstance<SelectType, false>> | null;
  }>({});
  const textareaRef = useRef<{
    [key: string]: LegacyRef<ReactQuill> | null;
  }>({});
  return (
    <div className={'worker__edit__wrapper'}>
      <div className="worker__edit__wrapper__main">
        <h3 className="worker__edit__wrapper__main__header">Pracownik</h3>
        <div className={'worker__edit__wrapper__main__basic'}>
          <InputText
            ref={inputsRef.current['worker__surname']}
            default={props.data?.surname ?? ''}
            required={true}
            style={{ width: 'auto', height: 'auto', marginRight: '2rem' }}
            labelText="Nazwisko"
            id={'worker__input__surname'}
            testData="worker__input__surname"
          />
          <InputText
            ref={inputsRef.current['worker__name']}
            id={'worker__input__name'}
            default={props.data?.name ?? ''}
            required={true}
            style={{ width: 'auto', marginRight: '2rem' }}
            labelText="Imię"
          />
          <InputText
            ref={inputsRef.current['worker__second__name']}
            id={'worker__input__second__name'}
            testData="worker__input__second__name"
            default={props.data?.secondName ?? ''}
            required={true}
            style={{ width: 'auto', marginRight: '2rem' }}
            labelText="Drugie imię"
          />
          <Selectr
            ref={selectsRef.current['worker__select__sex']}
            defaultValue={props.data?.sex ?? ''}
            id={'worker__select__sex'}
            testData="worker__select__sex"
            options={[
              { value: 'men', label: 'Mężczyzna' },
              { value: 'women', label: 'Kobieta' },
            ]}
            labelText="Płeć"
          />
        </div>
        <SeparatorLine text={'Ważność szkoleń i badań'} />

        <div className={'worker__edit__wrapper__main__info'}>
          <div style={{ width: '25%' }}>
            <InputDate
              default={[props.data?.trainingEntry]}
              ref={inputsRef.current['worker__input__entry__training']}
              id={'worker__input__entry__training'}
              testData="worker__input__entry__training"
              mode={'single'}
              required={true}
              labelText="Szkolenie wstępne"
            />
          </div>
          <div style={{ width: '25%', margin: '0 2rem' }}>
            <InputDate
              default={[props.data?.trainingPeriodic]}
              ref={inputsRef.current['worker__input__periodic__training']}
              id={'worker__input__periodic__training'}
              testData="worker__input__periodic__training"
              mode={'single'}
              labelText="Szkolenie okresowe"
            />
          </div>
          <div style={{ width: '25%' }}>
            <InputDate
              default={[props.data?.medicalExamination]}
              ref={inputsRef.current['worker__input__medical__examination']}
              id={'worker__input__medical__examination'}
              testData="worker__input__medical__examination"
              mode={'single'}
              labelText="Badanie lekarskie"
            />
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
                // default={String(props.data.company.id)}
                ref={selectsRef.current['worker__select__company']}
                id={'worker__select__company'}
                testData="worker__select__company"
                defaultValue={props.data?.company?.id ?? ''}
                isRequired={true}
                options={[{ value: '1', label: 'ZanIt' }]}
                labelText="Firma"
              />
              <Selectr
                ref={selectsRef.current['worker__select__department']}
                id={'worker__select__department'}
                testData="worker__select__department"
                defaultValue={props.data?.department ?? ''}
                options={[{ value: '0', label: 'Wszystkie oddziały' }]}
                labelText="Oddział"
              />
              <Selectr
                ref={selectsRef.current['worker__select__employment']}
                id={'worker__select__employment'}
                testData="worker__select__employment"
                defaultValue={props.data?.employmentForm ?? ''}
                options={formsOfEmployment}
                labelText="Forma zatrudnienia"
              />
              <Selectr
                ref={selectsRef.current['worker__select__absence']}
                id={'worker__select__absence'}
                testData="worker__select__absence"
                defaultValue={props.data?.absence ?? ''}
                options={absenceTypes}
                labelText="Nieobecność"
              />
            </div>
            <div
              style={{ display: `${toggleData == 2 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
              className={'worker__edit__wrapper__main__rest__data__sensitive'}
            >
              <InputNumber
                ref={inputsRef.current['worker__input__pesel']}
                id={'worker__input__pesel'}
                testData="worker__input__pesel"
                default={props.data?.pesel}
                labelText="PESEL"
              />
              <InputText
                ref={inputsRef.current['worker__input__id__card']}
                id={'worker__input__id__card'}
                testData="worker__input__id__card"
                default={props.data?.IdCardNumber ?? ''}
                labelText="Nr dowodu os."
              />
              <InputDate
                ref={inputsRef.current['worker__input__birth__date']}
                id={'worker__input__birth__date'}
                testData="worker__input__birth__date"
                default={[props.data?.dateOfBirth]}
                mode="single"
                labelText="Data urodzenia"
              />
              <InputText
                ref={inputsRef.current['worker__input__birth__place']}
                id={'worker__input__birth__place'}
                testData="worker__input__birth__place"
                default={props.data?.placeOfBirth ?? ''}
                labelText="Miejsce urodzenia"
              />
              <Selectr
                ref={selectsRef.current['worker__select__disability']}
                id={'worker__select__disability'}
                testData="worker__select__disability"
                defaultValue={String(props.data?.disability ?? '')}
                options={yesNoTypes}
                labelText="Niepełnosprawność"
              />
            </div>
            <div
              style={{ display: `${toggleData == 3 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
              className={'worker__edit__wrapper__main__rest__data__contact'}
            >
              <InputText
                ref={inputsRef.current['worker__input__postal__code']}
                id={'worker__input__postal__code'}
                testData="worker__input__postal__code"
                default={props.data?.postalCode ?? ''}
                wrapperStyle={{ width: '25%' }}
                required={true}
                labelText="KOD pocztowy"
              />
              <InputText
                ref={inputsRef.current['worker__input__city']}
                id={'worker__input__city'}
                testData="worker__input__city"
                default={props.data?.city ?? ''}
                wrapperStyle={{ width: '25%', margin: '0 2rem' }}
                required={true}
                labelText="Miasto"
              />
              <InputText
                ref={inputsRef.current['worker__input__street']}
                id={'worker__input__street'}
                testData="worker__input__street"
                default={props.data?.street ?? ''}
                wrapperStyle={{ width: '30%', flexGrow: '1' }}
                required={true}
                labelText="ulica"
              />
              <InputPhone
                ref={inputsRef.current['worker__input__phone']}
                id={'worker__input__phone'}
                testData="worker__input__phone"
                default={String(props.data?.phoneNumber ?? '')}
                wrapperStyle={{ width: '20%' }}
                labelText="Numer telefonu"
              />
              <InputEmail
                ref={inputsRef.current['worker__input__email']}
                id={'worker__input__email'}
                testData="worker__input__email"
                default={props.data?.email ?? ''}
                wrapperStyle={{ width: '30%', margin: '0 2rem' }}
                labelText="Adres email"
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
                <InputText
                  ref={inputsRef.current['worker__input__position']}
                  id={'worker__input__position'}
                  testData="worker__input__position"
                  default={props.data?.position ?? ''}
                  labelText="Stanowisko"
                />
                <Selectr
                  ref={selectsRef.current['worker__input__position__type']}
                  id={'worker__input__position__type'}
                  testData="worker__input__position__type"
                  defaultValue={props.data?.positionType ?? ''}
                  options={positionType}
                  labelText="Rodzaj"
                />
              </div>
              <div style={{ display: 'flex', width: '100%', gap: '2rem' }}>
                <Selectr
                  ref={selectsRef.current['worker__select__section']}
                  id={'worker__select__section'}
                  testData="worker__select__section"
                  defaultValue={props.data?.positionSection ?? ''}
                  options={positionType}
                  labelText="Dział"
                />
                <Selectr
                  ref={selectsRef.current['worker__select__night']}
                  id={'worker__select__night'}
                  testData="worker__select__night"
                  defaultValue={String(props.data?.nightShift ?? '')}
                  options={yesNoTypes}
                  labelText="Praca w porze nocnej"
                />
                <Selectr
                  ref={selectsRef.current['worker__select__youth']}
                  id={'worker__select__youth'}
                  testData="worker__select__youth"
                  defaultValue={String(props.data?.youth ?? '')}
                  options={yesNoTypes}
                  labelText="Pracownik młodociany"
                />
              </div>
              <InputTextarea
                ref={textareaRef.current['worker__input__position__notes']}
                id={'worker__input__position__notes'}
                testData="worker__input__position__notes"
                default={String(props.data?.positionNotes ?? '')}
                labelText={'Opis stanowiska'}
                wrapperStyle={{ width: '100%' }}
              />
            </div>
            <div
              style={{ display: `${toggleData == 5 ? 'flex' : 'none'}`, marginBottom: '3rem' }}
              className={'worker__edit__wrapper__main__rest__notes'}
            >
              <InputTextarea
                ref={textareaRef.current['worker__input__notes']}
                id={'worker__input__notes'}
                testData="worker__input__notes"
                default={String(props.data?.notes ?? '')}
                wrapperStyle={{ width: '100%' }}
              />
            </div>
          </div>
          <div className={'worker__edit__wrapper__main__rest__save'}>
            <Button
              style={{ width: '150px' }}
              class="button--blue"
              type="submit"
              onClick={() => {}}
            >
              Zapisz
            </Button>
            <Button
              type={'button'}
              style={{ width: '150px' }}
              class="button--gray"
              onClick={() => {}}
            >
              Anuluj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
