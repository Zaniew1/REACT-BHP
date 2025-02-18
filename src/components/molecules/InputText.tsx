import React, { useRef } from 'react'
type InputType = {
    inputValue: (value: string) => void;
    inputId: string;
    inputType: "text" | "email" | "password"
    labelText?:string;
    minLength?: number;
    maxLength?: number;
    required?: boolean
    labelClass?: string;
    inputClass?: string;
    wrapperClass?:string
}
export const InputText = (props: InputType):React.JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = () => {                  
    if (inputRef.current) {
      props.inputValue(inputRef.current.value);
    }
  };
  return (
    <div className={props.wrapperClass ?? "input__wrapper"}>
        <label className={`${props.labelClass ?? "input__label"} ${props.required ? "input__label__req":""}`} htmlFor={props.inputId}>{props.labelText}</label>
        <input onChange={handleInputChange} ref={inputRef} id={props.inputId} type={props.inputType} className={`${props.inputClass ?? "input"} ${props.required ? "input_required":""}`} required={props.required}  minLength={props.minLength} maxLength={props.maxLength}/>
    </div>
  )
}
