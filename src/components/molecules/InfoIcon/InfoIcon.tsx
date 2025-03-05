import React, { CSSProperties } from 'react';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

type InfoIconType = {
  icon: React.ReactNode;
  text: string;
  quantity: number;
  style?: CSSProperties;
};

export const InfoIcon = (props: InfoIconType): React.JSX.Element => {
  return (
    <div style={props.style} className={'infoIcon'}>
      {props.icon}
      <Paragraph text={props.text} />
      <Paragraph text={String(props.quantity)} />
    </div>
  );
};
