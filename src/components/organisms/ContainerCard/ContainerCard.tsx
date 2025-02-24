import { useRef } from 'react';
import { SelectWithSearch } from '../../molecules/Select/Select';
import Select from 'react-select';

export const ContainerCard: React.FC = (): JSX.Element => {
  const inputRef = useRef<Select>(null);
  console.log('1');
  const handleCheckStatus = () => {};
  return (
    <main className="container">
      <SelectWithSearch
        options={[
          { value: '111', label: '111' },
          { value: '111', label: '111' },
        ]}
        ref={inputRef}
        id={'12'}
      />
      <br />
      <button onClick={handleCheckStatus}>Check Status</button>
    </main>
  );
};
