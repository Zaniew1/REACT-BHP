import React from 'react';
type InputType = {
  id: string;
  children: React.ReactElement;
  labelText?: string;
  required?: boolean;
  labelClass?: string;
  wrapperClass?: string;
};
export const Label = (props: InputType): React.JSX.Element => {
  return (
    <div className={props.wrapperClass ?? 'input__wrapper'}>
      <label
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
