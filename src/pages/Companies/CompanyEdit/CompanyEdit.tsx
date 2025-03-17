import React, { useRef, useState } from 'react';
import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { InputNumber } from '../../../components/molecules/Input/Number/InputNumber';
import { Button } from '../../../components/atoms/Button/Button';
import { InputPhone } from '../../../components/molecules/Input/Phone/InputPhone';
import { InputEmail } from '../../../components/molecules/Input/Email/InputEmail';
import { InputTextarea } from '../../../components/molecules/Input/Textarea/InputTextarea';

export const CompanyEdit = () => {
  const [toggleData, setToggleData] = useState<boolean>(true);
  const nipRef = useRef<HTMLInputElement>(null);
  return (
    <div className="company__edit">
      <PathInformation
        style={{ marginBottom: '2rem' }}
        visibleSlash={true}
        paragraphText="Edycja firmy"
        linkText="Firmy"
        linkHref="/firmy"
      />
      <div className={'company__edit__wrapper'}>
        <div className="company__edit__wrapper__main">
          <h3 className="company__edit__wrapper__main__header">Firmy</h3>
          <div className={'company__edit__wrapper__main__nip'}>
            <InputText
              ref={nipRef}
              required={true}
              style={{ width: '20%' }}
              labelText="nip"
              id={'company__edit__nip'}
            />
          </div>
          <div className={'company__edit__wrapper__main__info'}>
            <div style={{ width: '50%' }}>
              <InputText required={true} labelText="Nazwa" id={'company__edit__name'} />
            </div>
            <div style={{ width: '25%', margin: '0 2rem' }}>
              <InputNumber labelText="Regon" id={'company__edit__regon'} />
            </div>
            <div style={{ width: '25%' }}>
              <InputText labelText="Kod pkd" id={'company__edit__pkd'} />
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
                  id={'company__edit__phone'}
                />
                <InputEmail
                  wrapperStyle={{ width: '30%', margin: '0 2rem' }}
                  labelText="Adres email"
                  id={'company__edit__mail'}
                />
              </div>
              <div
                style={{ display: `${!toggleData ? 'flex' : 'none'}`, marginBottom: '3rem' }}
                className={'company__edit__wrapper__main__rest__notes'}
              >
                <InputTextarea wrapperStyle={{ width: '100%' }} id={'company__edit__textarea'} />
              </div>
            </div>
            <div className={'company__edit__wrapper__main__rest__save'}>
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
