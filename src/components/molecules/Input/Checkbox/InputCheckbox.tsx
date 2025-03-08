import { CSSProperties, forwardRef } from 'react';
import { Label } from '../../Label/Label';
type InputCheckboxType = {
  id: string;
  name?: string;
  value?: (value: boolean) => void;
  default?: boolean;
  labelText?: string;
  required?: boolean;
  labelClass?: string;
  labelStyle?: CSSProperties;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  inputStyle?: CSSProperties;
};
export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxType>((props, ref) => {
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass ?? 'checkbox__label'}
      labelStyle={props.labelStyle}
      wrapperClass={props.wrapperClass ?? 'checkbox'}
      wrapperStyle={props.wrapperStyle}
      required={props.required}
      labelText={props.labelText}
    >
      <div className={'checkbox__wrapper'}>
        <input
          style={props.inputStyle}
          name={props.name}
          checked={props.default}
          type="checkbox"
          ref={ref}
          id={props.id}
          className={`${'checkbox__wrapper__input'} ${props.required ? 'input_required' : ''}`}
          required={props.required}
          onChange={(e) => {
            props.value(e.target.checked);
          }}
        />
        <div className={'checkbox__wrapper__switch'}>
          <div className={'checkbox__wrapper__switch__dot'}></div>
        </div>
      </div>
    </Label>
  );
});
