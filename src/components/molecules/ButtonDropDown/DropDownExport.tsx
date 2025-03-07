import { Printer, Sheet, File, Copy, FileText } from 'lucide-react';

const exportDropDownData = [
  {
    icon: <Printer />,
    text: 'Drukuj',
    onClick: () => {
      console.log('klikłem');
    },
  },
  {
    icon: <File />,
    text: 'CSV',
    onClick: () => {
      console.log('klikłem');
    },
  },
  {
    icon: <Sheet />,
    text: 'Excel',
    onClick: () => {
      console.log('klikłem');
    },
  },
  {
    icon: <FileText />,
    text: 'PDF',
    onClick: () => {
      console.log('klikłem');
    },
  },
  {
    icon: <Copy />,
    text: 'Kopiuj',
    onClick: () => {},
  },
];
export const DropDownExport = () => {
  return (
    <ul className={'dropdown__area__list'}>
      {exportDropDownData.map((el, index) => {
        return (
          <li
            onClick={el.onClick}
            key={el.text + index}
            className={'dropdown__area__list__element'}
          >
            {el.icon} {el.text}
          </li>
        );
      })}
    </ul>
  );
};
