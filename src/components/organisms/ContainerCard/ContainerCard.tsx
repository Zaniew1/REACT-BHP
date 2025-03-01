import { useRef } from 'react';
import { MyTable } from '../Table/Table';

export const ContainerCard: React.FC = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="container">
      <div className="container__cont">
        <MyTable ref={inputRef} />
      </div>
    </main>
  );
};
