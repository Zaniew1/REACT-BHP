import { CSSProperties, forwardRef } from 'react';
import { Label } from '../../Label/Label';
type InputCheckboxType = {
  id: string;
  name: string;
  default?: boolean;
  labelText?: string;
  required?: boolean;
  labelClass?: string;
  wrapperClass?: string;
  style?: CSSProperties;
};
export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxType>((props, ref) => {
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass ?? 'checkbox__label'}
      wrapperClass={props.wrapperClass ?? 'checkbox'}
      required={props.required}
      labelText={props.labelText}
    >
      <div className={'checkbox__wrapper'}>
        <input
          style={props.style}
          name={props.name}
          checked={props.default}
          type="checkbox"
          ref={ref}
          id={props.id}
          className={`${'checkbox__wrapper__input'} ${props.required ? 'input_required' : ''}`}
          required={props.required}
        />
        <div className={'checkbox__wrapper__switch'}>
          <div className={'checkbox__wrapper__switch__dot'}></div>
        </div>
      </div>
    </Label>
  );
});
