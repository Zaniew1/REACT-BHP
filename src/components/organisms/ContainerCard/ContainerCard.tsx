import { useRef } from 'react';
import { Selectr } from '../../molecules/Select/Select';
import { SelectInstance } from 'react-select';
import { OptionType } from '../../molecules/Select/SelectTypes';

export const ContainerCard: React.FC = (): JSX.Element => {
  const inputRef = useRef<SelectInstance<OptionType, false>>(null);
  const handleCheckStatus = () => {
    if (inputRef.current) {
      console.log(inputRef.current.getValue());
    }
  };
  return (
    <main className="container">
      <Selectr
        options={[
          { value: '111', label: '111' },
          { value: '123', label: '123' },
        ]}
        ref={inputRef}
        id={'12'}
      />
      <br />
      <button onClick={handleCheckStatus}>Check Status</button>
    </main>
  );
};
