import { Logo } from '../../components/atoms/Logo/Logo';
import { Paragraph } from '../../components/atoms/Paragraph/Paragraph';
import { InputEmail } from '../../components/molecules/Input/Email/InputEmail';
import { Button } from './../../components/atoms/Button/Button';
import { Link } from '../../components/atoms/Link/Link';
import { UserRound } from 'lucide-react';
const remind = (e: React.SyntheticEvent) => {
  e.preventDefault();
};
const RemindPassword = (): React.JSX.Element => {
  return (
    <div className={'auth'}>
      <div className={'auth__wrapper'}>
        <div className={'auth__wrapper__logo'}>
          <Logo />
        </div>
        <div className={'auth__wrapper__texts'}>
          <Paragraph class={'auth__wrapper__texts__header'} text={'Przypomnanie hasła'} />
          <Paragraph
            class={'auth__wrapper__texts__subheader'}
            text={'Wyślij na swój adres email, link do zresetowania hasła'}
          />
        </div>
        <form className={'auth__wrapper__form'} id={'auth__login__form'}>
          <InputEmail
            maxLength={30}
            labelText="Adres Email"
            required={true}
            id={'auth__login__form__email'}
          />
        </form>
        <Button
          style={{ padding: '0', margin: '0' }}
          class="button--blue"
          form={'auth__login__form'}
          type={'submit'}
          onClick={remind}
        >
          Wyślij
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

export default RemindPassword;
