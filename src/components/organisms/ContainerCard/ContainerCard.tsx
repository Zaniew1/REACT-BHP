import { useRef } from 'react';
import { InputPhone } from '../../molecules/Input/Phone/InputPhone';

export const ContainerCard: React.FC = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleCheckStatus = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };
  return (
    <main className="container">
      <InputPhone ref={inputRef} id={'12'} />
      <br />
      <button onClick={handleCheckStatus}>Check Status</button>
    </main>
  );
};
