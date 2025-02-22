import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Label } from '../../Label/Label';
type InputTextareaType = {
  value: (value: string) => void;
  id: string;
  default?: string;
  labelText?: string;
  labelClass?: string;
  wrapperClass?: string;
  dateFormat?: string;
  minDate?: string | Date;
  maxDate?: string | Date;
};

export const InputTextarea = (props: InputTextareaType): React.JSX.Element => {
  const handleInput = (value: string) => {
    props.value(value);
  };
  return (
    <Label
      labelText={props.labelText}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      id={props.id}
    >
      <>
        <ReactQuill id={props.id} theme="snow" value={props.default ?? ''} onChange={handleInput} />
      </>
    </Label>
  );
};
