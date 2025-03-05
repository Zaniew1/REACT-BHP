import { CSSProperties, forwardRef } from 'react';
import { Label } from '../../Label/Label';
type InputNumberType = {
  default?: number;
  id: string;
  labelText?: string;
  min?: number;
  max?: number;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
  step?: number;
  style?: CSSProperties;
};
export const InputNumber = forwardRef<HTMLInputElement, InputNumberType>((props, ref) => {
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.required}
      labelText={props.labelText}
    >
      <input
        style={props.style}
        defaultValue={props.default}
        step={props.step}
        ref={ref}
        id={props.id}
        type={'number'}
        className={`${props.inputClass ?? 'input'} ${props.required ? 'input_required' : ''}`}
        required={props.required}
        min={props.min}
        max={props.max}
      />
    </Label>
  );
});
