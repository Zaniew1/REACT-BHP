import { CSSProperties, forwardRef } from 'react';
import ReactQuill from 'react-quill-new';
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
  style?: CSSProperties;
  wrapperStyle?: CSSProperties;
};

export const InputTextarea = forwardRef<ReactQuill, InputTextareaType>((props, ref) => {
  return (
    <Label
      labelText={props.labelText}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      wrapperStyle={props.wrapperStyle}
      id={props.id}
    >
      <>
        <ReactQuill style={props.style} ref={ref} id={props.id} value={props.default} />
      </>
    </Label>
  );
});
