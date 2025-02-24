import { forwardRef } from 'react';
import { Label } from '../../Label/Label';
type InputColorType = {
  id: string;
  default?: string;
  labelText?: string;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
};
export const InputColor = forwardRef<HTMLInputElement, InputColorType>((props, ref) => {
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.required}
      labelText={props.labelText}
    >
      <input
        defaultValue={props.default ?? '#000'}
        ref={ref}
        id={props.id}
        type={'color'}
        className={`${props.inputClass ?? 'input__color'} ${
          props.required ? 'input_required' : ''
        }`}
        required={props.required}
      />
    </Label>
  );
});
