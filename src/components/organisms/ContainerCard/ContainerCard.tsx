import { useState } from 'react';
import { InputTextarea } from '../../molecules/Input/Textarea/InputTextarea';
export const ContainerCard: React.FC = (): JSX.Element => {
  const [input, setInput] = useState<number[] | null>([1111111111000]);
  console.log(input);
  return (
    <main className="container">
      <InputTextarea></InputTextarea>
    </main>
  );
};
