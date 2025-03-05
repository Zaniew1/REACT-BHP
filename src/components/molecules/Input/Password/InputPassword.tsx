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
export const InputPassword = forwardRef<HTMLInputElement, InputTextType>((props, ref) => {
  const [hasNumbers, setHasNumbers] = useState<boolean>(true);
  const [hasLength, setHasLength] = useState<boolean>(true);
  const [hasSpecialChar, setHasSpecialChar] = useState<boolean>(true);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexNumbers = /\d/;
    const regexSpecialSigns = /[^a-zA-Z0-9]/;
    if (event.target.value.match(regexNumbers)) {
      setHasNumbers(true);
    } else {
      setHasNumbers(false);
    }
    if (event.target.value.length >= 8) {
      setHasLength(true);
    } else {
      setHasLength(false);
    }
    if (event.target.value.match(regexSpecialSigns)) {
      setHasSpecialChar(true);
    } else {
      setHasSpecialChar(false);
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
          type={'password'}
          className={`${props.inputClass ?? 'input'} ${
            !hasLength || !hasNumbers || !hasSpecialChar ? 'input_required' : ''
          }`}
          required={props.required}
          minLength={props.minLength}
          maxLength={props.maxLength}
        />
        {!hasLength && <span className={'input_warning'}>Hasło musi zawierać min 8 znaków</span>}
        {!hasNumbers && <span className={'input_warning'}>Hasło musi zawierać liczbę</span>}
        {!hasSpecialChar && (
          <span className={'input_warning'}>Hasło musi zawierać znak specjalny</span>
        )}
      </>
    </Label>
  );
});
