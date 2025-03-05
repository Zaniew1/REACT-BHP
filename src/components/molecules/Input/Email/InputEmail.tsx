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
export const InputEmail = forwardRef<HTMLInputElement, InputTextType>((props, ref) => {
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    >
      <>
        <input
          style={props.style}
          onChange={handleInputChange}
          ref={ref}
          id={props.id}
          type={'email'}
          className={`${props.inputClass ?? 'input'} ${!isEmail ? 'input_required' : ''}`}
          required={props.required}
          minLength={props.minLength}
          maxLength={props.maxLength}
        />
        {!isEmail && <span className={'input_warning'}>Nieprawidłowy email</span>}
      </>
    </Label>
  );
});
