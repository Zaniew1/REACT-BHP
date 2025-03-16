import React from 'react';
import { Logo } from '../../components/atoms/Logo/Logo';
import { Paragraph } from '../../components/atoms/Paragraph/Paragraph';
import { InputEmail } from '../../components/molecules/Input/Email/InputEmail';
import { InputPassword } from '../../components/molecules/Input/Password/InputPassword';
import { Button } from './../../components/atoms/Button/Button';
import { Link } from '../../components/atoms/Link/Link';
import { UserRound } from 'lucide-react';
import { InputCheckbox } from '../../components/molecules/Input/Checkbox/InputCheckbox';
const registerUser = (e: React.SyntheticEvent) => {
  e.preventDefault();
};
const Register = (): React.JSX.Element => {
  return (
    <div className={'auth'}>
      <div className={'auth__wrapper'}>
        <div className={'auth__wrapper__logo'}>
          <Logo />
        </div>
        <div className={'auth__wrapper__texts'}>
          <Paragraph class={'auth__wrapper__texts__header'} text={'Rejestracja użytkownika'} />
          <Paragraph
            class={'auth__wrapper__texts__subheader'}
            text={'Przekonaj się jak przyjazny i prosty w obsłudze jest BHP. Załóż konto już teraz'}
          />
        </div>
        <form className={'auth__wrapper__form'} id={'auth__login__form'}>
          <InputEmail
            maxLength={30}
            labelText="Adres Email"
            required={true}
            id={'auth__login__form__email'}
          />

          <InputPassword
            minLength={8}
            maxLength={20}
            labelText="Hasło"
            required={true}
            id={'auth__login__form__password'}
          />
          <InputPassword
            minLength={8}
            maxLength={20}
            labelText="potwierdzenie Hasła"
            required={true}
            id={'auth__login__form__password__repeat'}
          />
        </form>
        <Button
          style={{ padding: '0', margin: '0' }}
          class="button--blue"
          form={'auth__login__form'}
          type={'submit'}
          onClick={registerUser}
        >
          Zaloguj
        </Button>
        {/* <Link style={{ marginTop: '1rem' }} href="/remindPassword">
          Zapomniałeś hasła?
        </Link> */}
        <div className={'auth__wrapper__acceptance'}>
          <InputCheckbox required={true} labelText={'Akceptuję politykę prywatności. '} />
          <InputCheckbox
            required={true}
            labelText={'Akceptuję otrzymywanie wiadomości e-mail dotyczących mojej subskrypcji. '}
          />
        </div>
        <p className={'auth__wrapper__or'}>lub</p>
        <Link
          class={'auth__wrapper__register'}
          style={{ margin: '2rem auto 1rem auto' }}
          href="/login"
        >
          <UserRound /> Zaloguj sie
        </Link>
      </div>
    </div>
  );
};

export default Register;
