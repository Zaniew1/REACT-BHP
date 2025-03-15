import React, { CSSProperties } from 'react';
export type ParagraphType = {
  text: string;
  class?: string;
  style?: CSSProperties;
};
export const Paragraph = (props: ParagraphType): React.JSX.Element => {
  return (
    <p style={props.style} className={props.class ?? 'paragraph'}>
      {props.text}
    </p>
  );
};
