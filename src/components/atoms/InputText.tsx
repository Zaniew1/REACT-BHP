import React from 'react'
type InputType = {
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
  return (
    <div className={props.wrapperClass ?? "input__wrapper"}>
        <label className={`${props.labelClass} ${props.required ? "input_required":""}`} htmlFor={props.inputId}>{props.labelText}</label>
        <input id={props.inputId} type={props.inputType} className={props.inputClass} required={props.required}  minLength={props.minLength} maxLength={props.maxLength}/>
    </div>
  )
}
