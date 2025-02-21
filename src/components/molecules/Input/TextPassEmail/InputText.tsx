import React, { useRef } from 'react'
import { Label } from '../../Label/Label';
type InputTextType = {
    value: (value: string) => void;
    id: string;
    type: "text" | "email" | "password"
    labelText?:string;
    minLength?: number;
    maxLength?: number;
    required?: boolean
    labelClass?: string;
    inputClass?: string;
    wrapperClass?:string
}
export const InputText = (props: InputTextType):React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {                  
    if (inputRef.current) {
      props.value(inputRef.current.value);
    }
  };
  return (
    <Label id={props.id} labelClass={props.labelClass}  wrapperClass={props.wrapperClass} required={props.required} labelText={props.labelText}>
      <input onChange={handleInputChange} ref={inputRef} id={props.id} type={props.type} className={`${props.inputClass ?? "input"} ${props.required ? "input_required":""}`} required={props.required}  minLength={props.minLength} maxLength={props.maxLength}/>
    </Label>
  )
}
