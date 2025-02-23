import React, { useRef } from 'react';
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
  minLength?: number;
  maxLength?: number;
};

export const InputTextarea = (props: InputTextareaType): React.JSX.Element => {
  const reactQuillRef = useRef<ReactQuill | null>(null);
  const handleInput = () => {
    if (reactQuillRef && reactQuillRef.current) {
      props.value(String(reactQuillRef.current.value));
    }
  };
  return (
    <Label
      labelText={props.labelText}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      id={props.id}
    >
      <>
        <ReactQuill
          ref={reactQuillRef}
          id={props.id}
          value={props.default}
          onKeyDown={handleInput}
        />
      </>
    </Label>
  );
};
