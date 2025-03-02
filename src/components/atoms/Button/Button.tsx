import { CSSProperties } from 'react';

export type ButtonType = {
  class?: 'button--gray' | 'button--blue' | 'button--red';
  children?: React.ReactNode | string;
  onClick: () => void;
  style?: CSSProperties;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  form?: string;
  name?: string;
};

export const Button = (props: ButtonType): React.JSX.Element => {
  return (
    <button
      style={props.style}
      className={props.class ?? 'button'}
      form={props.form}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
