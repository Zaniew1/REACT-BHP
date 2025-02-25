import { useRef } from 'react';
import { Table } from '../Table/Table';

export const ContainerCard: React.FC = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleCheckStatus = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  };
  return (
    <main className="container">
      <Table ref={inputRef} />
      <br />
      <button onClick={handleCheckStatus}>Check Status</button>
    </main>
  );
};
