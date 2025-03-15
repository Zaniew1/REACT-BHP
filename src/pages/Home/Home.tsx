import React from 'react';
import { ElementsInformation } from '../../components/organisms/ElementsInformation/ElementsInformation';

const data = [
  [
    [
      {
        header: 'Dane wrażliwe',
        info: [
          { label: 'PESEL', value: 'a' },
          { label: 'PESEL', value: 'a' },
          { label: 'PESEL', value: 'a' },
        ],
      },
    ],
    [
      {
        header: 'Dane wrażliwe',
        info: [{ label: 'PESEL', value: 'coś tamn' }],
      },
    ],
  ],
  [
    [
      {
        header: 'Dane firmowe',
        info: [{ label: 'Firma', value: 'Gówno' }],
      },
    ],
  ],
];

export const Home = (): React.JSX.Element => {
  return (
    <div id="page_home">
      <ElementsInformation
        header={'Mateusz Zaniewski'}
        subheader={'Klepacze ul.polna 11'}
        modificationDate={new Date()}
        data={data}
      />
    </div>
  );
};
