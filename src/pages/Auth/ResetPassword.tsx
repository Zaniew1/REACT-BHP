import { Logo } from '../../components/atoms/Logo/Logo';
import { Paragraph } from '../../components/atoms/Paragraph/Paragraph';
import { InputPassword } from '../../components/molecules/Input/Password/InputPassword';
import { Button } from './../../components/atoms/Button/Button';
import { Link } from '../../components/atoms/Link/Link';
import { UserRound } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const ResetPassword = (): React.JSX.Element => {
  const [passwordsTheSame, setPasswordsTheSame] = useState<boolean>(true);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const loginUser = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const passVal = password.current.value;
    const confirmPassVal = confirmPassword.current.value;
    if (passVal !== confirmPassVal) {
      setPasswordsTheSame(false);
    }
    console.log(password.current.value, confirmPassword.current.value);
  };
  return (
    <div className={'auth'}>
      <div className={'auth__wrapper'}>
        <div className={'auth__wrapper__logo'}>
          <Logo />
        </div>
        <div className={'auth__wrapper__texts'}>
          <Paragraph class={'auth__wrapper__texts__header'} text={'Resetowanie hasła'} />
          <Paragraph
            class={'auth__wrapper__texts__subheader'}
            text={'Uzupełnij aby zresetować hasło'}
          />
        </div>
        <form className={'auth__wrapper__form'} id={'auth__login__form'}>
          <InputPassword
            ref={password}
            minLength={8}
            maxLength={20}
            labelText="Hasło"
            required={true}
            id={'auth__login__form__password'}
          />
          <InputPassword
            ref={confirmPassword}
            minLength={8}
            maxLength={20}
            labelText="Potwierdź Hasło"
            required={true}
            id={'auth__login__form__password__confirm'}
          />
          {!passwordsTheSame && <span className={'input_warning'}>Hasła muszą być takie same</span>}
        </form>
        <Button
          style={{ padding: '0', margin: '0' }}
          class="button--blue"
          form={'auth__login__form'}
          type={'submit'}
          onClick={loginUser}
        >
          Resetuj
        </Button>
        <p className={'auth__wrapper__or'}>lub</p>
        <Link
          class={'auth__wrapper__register'}
          style={{ margin: '2rem auto 0 auto' }}
          href="/login"
        >
          <UserRound /> Zaloguj
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
