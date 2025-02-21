import React, { useRef } from 'react'
import { Label } from '../../Label/Label';
type InputNumberType = {
    value: (value: string) => void;
    default?:number;
    id: string;
    labelText?:string;
    min?: number;
    max?: number;
    required?: boolean
    labelClass?: string;
    inputClass?: string;
    wrapperClass?:string
    step?:number;
}
export const InputNumber = (props: InputNumberType):React.JSX.Element => {
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
        onChange={handleInputChange} 
        step={props.step} 
        ref={inputRef} 
        id={props.id} 
        type={"number"} 
        className={`${props.inputClass ?? "input"} ${props.required ? "input_required":""}`} 
        required={props.required}  
        min={props.min} 
        max={props.max}
    />
    </Label>
  )
}
