import React, { useRef } from 'react'
import { Label } from '../../Label/Label';
type InputCheckboxType = {
    value: (value: boolean) => void;
    id: string;
    name: string;
    default?: boolean
    labelText?:string;
    minLength?: number;
    maxLength?: number;
    required?: boolean
    labelClass?: string;
    wrapperClass?:string
}
export const InputCheckbox = (props:InputCheckboxType):React.JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputChange = () => {                  
      if (inputRef.current) {
        console.log(inputRef)
        props.value(inputRef.current.checked);
      }
    };

  return (
    <Label id={props.id} labelClass={props.labelClass ?? "checkbox__label"}  wrapperClass={props.wrapperClass ?? "checkbox"} required={props.required} labelText={props.labelText}>
      <div className={"checkbox__wrapper"}>
        <input name={props.name} checked={props.default} type="checkbox" onChange={handleInputChange} ref={inputRef} id={props.id}  className={`${"checkbox__wrapper__input"} ${props.required ? "input_required":""}`} required={props.required} />
        <div className={"checkbox__wrapper__switch"}>
          <div className={"checkbox__wrapper__switch__dot"}></div>
        </div>
      </div>
    </Label>
  )
}
