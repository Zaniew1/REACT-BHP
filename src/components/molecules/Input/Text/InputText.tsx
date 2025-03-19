import { CSSProperties, forwardRef, useState } from 'react';
import { Label } from '../../Label/Label';
type InputTextType = {
  id?: string;
  style?: CSSProperties;
  labelText?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  placeholder?: string;
  value?: (value: string) => void;
  default?: string;
  testData?: string;
};
export const InputText = forwardRef<HTMLInputElement, InputTextType>((props, ref) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.required}
      labelText={props.labelText}
      wrapperStyle={props.wrapperStyle}
    >
      <input
        style={props.style}
        ref={ref}
        id={props.id}
        type={'text'}
        className={`${props.inputClass ?? 'input'} ${
          props.required && isEmpty ? 'input_required' : ''
        }`}
        data-cy={props.testData}
        required={props.required}
        minLength={props.minLength}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        defaultValue={props.default}
        onChange={(input) => {
          console.log(input.target.value);
          setIsEmpty(input.target.value.trim() == '');
          if (props.value) props.value(input.target.value);
        }}
      />
    </Label>
  );
});
