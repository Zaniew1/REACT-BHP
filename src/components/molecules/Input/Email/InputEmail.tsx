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
  wrapperStyle?: CSSProperties;
  style?: CSSProperties;
  testData?: string;
  default?: string;
};
export const InputEmail = forwardRef<HTMLInputElement, InputTextType>((props, ref) => {
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [emailLength, setEmailLength] = useState<boolean>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (props.minLength && event.target.value.length < props.minLength) ||
      (props.maxLength && event.target.value.length > props.maxLength)
    ) {
      setEmailLength(true);
    }
    if (
      event.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
    ) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.required}
      labelText={props.labelText}
      wrapperStyle={props.wrapperStyle}
    >
      <>
        <input
          data-cy={props.testData}
          style={props.style}
          onChange={handleInputChange}
          ref={ref}
          id={props.id}
          type={'email'}
          className={`${props.inputClass ?? 'input'} ${!isEmail ? 'input_required' : ''}`}
          required={props.required}
          minLength={props.minLength}
          maxLength={props.maxLength}
          value={props.default}
        />
        {!isEmail && <span className={'input_warning'}>Nieprawidłowy email</span>}
      </>
    </Label>
  );
});
