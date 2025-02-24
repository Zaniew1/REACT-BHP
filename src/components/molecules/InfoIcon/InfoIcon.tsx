import React from 'react';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

type InfoIconType = {
  icon: React.ReactNode;
  text: string;
  quantity: number;
};

export const InfoIcon = (props: InfoIconType): React.JSX.Element => {
  return (
    <div className={'infoIcon'}>
      {props.icon}
      <Paragraph paragraphText={props.text} />
      <Paragraph paragraphText={String(props.quantity)} />
    </div>
  );
};
