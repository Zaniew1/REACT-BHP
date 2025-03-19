import { LegacyRef, useRef, useState } from 'react';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { InputNumber } from '../../../components/molecules/Input/Number/InputNumber';
import { Button } from '../../../components/atoms/Button/Button';
import { InputPhone } from '../../../components/molecules/Input/Phone/InputPhone';
import { InputEmail } from '../../../components/molecules/Input/Email/InputEmail';
import { InputTextarea } from '../../../components/molecules/Input/Textarea/InputTextarea';
import ReactQuill from 'react-quill-new';

type CompanyType = {
  nip: number;
  name: string;
  regon: number;
  pkd: string;
  postalCode: string;
  city: string;
  street: string;
  phoneNumber: number;
  email: string;
  notes: string;
};
type CompanyFormType = {
  data?: CompanyType;
};

export const CompanyForm = (props: CompanyFormType) => {
  const [toggleData, setToggleData] = useState<boolean>(true);
  const inputsRef = useRef<{
    [key: string]: LegacyRef<HTMLInputElement> | null;
  }>({});

  const textareaRef = useRef<{
    [key: string]: LegacyRef<ReactQuill> | null;
  }>({});
  return (
    <div className={'company__edit__wrapper'}>
      <div className="company__edit__wrapper__main">
        <h3 className="company__edit__wrapper__main__header">Firmy</h3>
        <div className={'company__edit__wrapper__main__nip'}>
          <InputText
            ref={inputsRef.current['company__input__nip']}
            id={'company__input__nip'}
            testData="company__input__nip"
            default={String(props.data?.nip ?? '')}
            required={true}
            style={{ width: '20%' }}
            labelText="nip"
          />
        </div>
        <div className={'company__edit__wrapper__main__info'}>
          <div style={{ width: '50%' }}>
            <InputText
              ref={inputsRef.current['company__input__name']}
              id={'company__input__name'}
              testData="company__input__name"
              default={props.data?.name ?? ''}
              required={true}
              labelText="Nazwa"
            />
          </div>
          <div style={{ width: '25%', margin: '0 2rem' }}>
            <InputNumber
              ref={inputsRef.current['company__input__regon']}
              id={'company__input__regon'}
              testData="company__input__regon"
              default={props.data?.regon}
              labelText="Regon"
            />
          </div>
          <div style={{ width: '25%' }}>
            <InputText
              ref={inputsRef.current['company__input__pkd']}
              id={'company__input__pkd'}
              testData="company__input__pkd"
              default={props.data?.pkd ?? ''}
              labelText="Kod pkd"
            />
          </div>
        </div>
        <p className={'auth__wrapper__or'}>Pozostałe dane</p>
        <div className={'company__edit__wrapper__main__rest'}>
          <div className={'company__edit__wrapper__main__rest__buttons'}>
            <Button
              class={`${toggleData ? 'button--blue' : 'button--none'}`}
              onClick={() => setToggleData(true)}
            >
              Dane kontaktowe
            </Button>
            <Button
              class={`${!toggleData ? 'button--blue' : 'button--none'}`}
              onClick={() => setToggleData(false)}
            >
              Notatki
            </Button>
          </div>
          <div className={'company__edit__wrapper__main__rest__data'}>
            <div
              style={{ display: `${toggleData ? 'flex' : 'none'}`, marginBottom: '3rem' }}
              className={'company__edit__wrapper__main__rest__data__contact'}
            >
              <InputText
                ref={inputsRef.current['company__input__postal']}
                id={'company__input__postal'}
                testData="company__input__postal"
                default={props.data?.postalCode ?? ''}
                wrapperStyle={{ width: '25%' }}
                required={true}
                labelText="KOD pocztowy"
              />
              <InputText
                ref={inputsRef.current['company__input__city']}
                id={'company__input__city'}
                testData="company__input__city"
                default={props.data?.city ?? ''}
                wrapperStyle={{ width: '25%', margin: '0 2rem' }}
                required={true}
                labelText="Miasto"
              />
              <InputText
                ref={inputsRef.current['company__input__street']}
                id={'company__input__street'}
                testData="company__input__street"
                default={props.data?.street ?? ''}
                wrapperStyle={{ width: '30%', flexGrow: '1' }}
                required={true}
                labelText="ulica"
              />
              <InputPhone
                ref={inputsRef.current['company__input__phone']}
                id={'company__input__phone'}
                testData="company__input__phone"
                default={String(props.data?.phoneNumber ?? '')}
                wrapperStyle={{ width: '20%' }}
                labelText="Numer telefonu"
              />
              <InputEmail
                ref={inputsRef.current['company__input__email']}
                id={'company__input__email'}
                testData="company__input__email"
                default={props.data?.email ?? ''}
                wrapperStyle={{ width: '30%', margin: '0 2rem' }}
                labelText="Adres email"
              />
            </div>
            <div
              style={{ display: `${!toggleData ? 'flex' : 'none'}`, marginBottom: '3rem' }}
              className={'company__edit__wrapper__main__rest__notes'}
            >
              <InputTextarea
                ref={textareaRef.current['company__input__notes']}
                id={'company__input__notes'}
                testData="company__input__notes"
                default={props.data?.notes}
                wrapperStyle={{ width: '100%' }}
              />
            </div>
          </div>
          <div className={'company__edit__wrapper__main__rest__save'}>
            <Button
              style={{ width: '150px' }}
              class="button--blue"
              onClick={() => {
                console.log(inputsRef);
              }}
            >
              Zapisz
            </Button>
            <Button style={{ width: '150px' }} class="button--gray" onClick={() => {}}>
              Anuluj
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
