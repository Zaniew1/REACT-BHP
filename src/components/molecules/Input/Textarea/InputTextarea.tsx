import { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Label } from '../../Label/Label';
type InputTextareaType = {
  id: string;
  default?: string;
  labelText?: string;
  labelClass?: string;
  wrapperClass?: string;
  minLength?: number;
  maxLength?: number;
};

export const InputTextarea = forwardRef<ReactQuill, InputTextareaType>((props, ref) => {
  return (
    <Label
      labelText={props.labelText}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      id={props.id}
    >
      <>
        <ReactQuill ref={ref} id={props.id} value={props.default} />
      </>
    </Label>
  );
});
