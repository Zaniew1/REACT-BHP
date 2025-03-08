import { CSSProperties } from 'react';

export type ButtonType = {
  id?: string;
  class?: 'button--gray' | 'button--blue' | 'button--red' | 'button--none';
  children?: React.ReactNode | string;
  onClick: (e: React.SyntheticEvent<EventTarget>) => void;
  style?: CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  name?: string;
};

export const Button = (props: ButtonType): React.JSX.Element => {
  return (
    <button
      id={props.id}
      style={props.style}
      className={props.class ?? 'button'}
      form={props.form}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  );
};
