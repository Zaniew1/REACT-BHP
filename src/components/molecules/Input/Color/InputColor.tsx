import React, {  useRef } from 'react'
import { Label } from '../../Label/Label';
type InputColorType = {
    value: (value: string) => void;
    id: string;
    default: string;
    labelText?:string;
    required?: boolean
    labelClass?: string;
    inputClass?: string;
    wrapperClass?:string
}
export const InputColor = (props: InputColorType):React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {                  
    if (inputRef.current) {
      props.value(inputRef.current.value);
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
      <input 
        defaultValue={props.default} 
        onBlur={handleInputChange} 
        ref={inputRef} 
        id={props.id} 
        type={"color"} 
        className={`${props.inputClass ?? "input__color"} ${props.required ? "input_required":""}`} 
        required={props.required}
      />
    </Label>
  )
}
