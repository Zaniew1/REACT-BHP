import { forwardRef } from 'react';
import { Label } from '../../Label/Label';
type InputTextType = {
  id: string;
  labelText?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
};
export const InputText = forwardRef<HTMLInputElement, InputTextType>((props, ref) => {
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.required}
      labelText={props.labelText}
    >
      <input
        ref={ref}
        id={props.id}
        type={'text'}
        className={`${props.inputClass ?? 'input'} ${props.required ? 'input_required' : ''}`}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
    </Label>
  );
});
