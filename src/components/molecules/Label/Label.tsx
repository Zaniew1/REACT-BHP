import React, { CSSProperties } from 'react';
type InputType = {
  id: string;
  children: React.ReactElement;
  labelText?: string;
  required?: boolean;
  labelClass?: string;
  labelStyle?: CSSProperties;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
};
export const Label = (props: InputType): React.JSX.Element => {
  return (
    <div style={props.wrapperStyle} className={props.wrapperClass ?? 'input__wrapper'}>
      <label
        style={props.labelStyle}
        className={`${props.labelClass ?? 'input__label'} ${
          props.required ? 'input__label__req' : ''
        }`}
        htmlFor={props.id}
      >
        {props.labelText}
      </label>
      {props.children}
    </div>
  );
};
