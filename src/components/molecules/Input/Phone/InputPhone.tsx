import { CSSProperties, forwardRef, useState } from 'react';
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
  style?: CSSProperties;
};
export const InputPhone = forwardRef<HTMLInputElement, InputTextType>((props, ref) => {
  const [inputValue, setInputValue] = useState<string>('');
  const handleInput = () => {
    const inputElement = ref as React.RefObject<HTMLInputElement>;
    if (inputElement.current?.value.length > 11) return;
    const onlyNums = inputElement.current?.value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < onlyNums.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formatted += ' ';
      }
      formatted += onlyNums[i];
    }
    setInputValue(formatted);
  };
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.required}
      labelText={props.labelText}
    >
      <>
        <div className={'phone_wrapper'}>
          <span className={'phone_area'}>+48</span>
          <input
            style={props.style}
            ref={ref}
            value={inputValue}
            id={props.id}
            type={'tel'}
            className={`${props.inputClass ?? 'phone_input'} ${
              props.required ? 'input_required' : ''
            }`}
            required={props.required}
            minLength={props.minLength}
            maxLength={props.maxLength}
            onChange={handleInput}
          />
        </div>
      </>
    </Label>
  );
});
