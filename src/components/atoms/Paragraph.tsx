import React from 'react';
export type ParagraphType = {
  paragraphText: string;
  paragraphClass?: string;
};
export const Paragraph = (props: ParagraphType): React.JSX.Element => {
  return <p className={props.paragraphClass}>{props.paragraphText}</p>;
};
