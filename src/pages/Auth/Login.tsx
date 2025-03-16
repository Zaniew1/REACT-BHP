import React from 'react';
import { Logo } from '../../components/atoms/Logo/Logo';
import { Paragraph } from '../../components/atoms/Paragraph/Paragraph';
import { InputEmail } from '../../components/molecules/Input/Email/InputEmail';
import { InputPassword } from '../../components/molecules/Input/Password/InputPassword';
import { Button } from './../../components/atoms/Button/Button';
import { Link } from '../../components/atoms/Link/Link';
import { UserRound } from 'lucide-react';
const loginUser = (e: React.SyntheticEvent) => {
  e.preventDefault();
};
const Login = (): React.JSX.Element => {
  return (
    <div className={'auth'}>
      <div className={'auth__wrapper'}>
        <div className={'auth__wrapper__logo'}>
          <Logo />
        </div>
        <div className={'auth__wrapper__texts'}>
          <Paragraph class={'auth__wrapper__texts__header'} text={'Logowanie'} />
          <Paragraph
            class={'auth__wrapper__texts__subheader'}
            text={'Zaloguj się na swoje konto'}
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
        </form>
        <Button
          style={{ padding: '0', margin: '0' }}
          class="button--blue"
          form={'auth__login__form'}
          type={'submit'}
          onClick={loginUser}
        >
          Zaloguj
        </Button>
        <Link style={{ marginTop: '1rem' }} href="/remindPassword">
          Zapomniałeś hasła?
        </Link>
        <p className={'auth__wrapper__or'}>lub</p>
        <Link
          class={'auth__wrapper__register'}
          style={{ margin: '2rem auto 0 auto' }}
          href="/register"
        >
          <UserRound /> Załóż konto
        </Link>
      </div>
    </div>
  );
};

export default Login;
