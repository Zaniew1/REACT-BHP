import React, { useRef } from 'react'

type SelectType = {
  selectValue: (value: string) => void;
  selectId: string;
  selectOptions: {value:string, text:string}[];
  labelText?:string;
  labelClass?: string;
  selectClass?: string;
  wrapperClass?:string
}

export const Select = (props: SelectType):React.JSX.Element => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const handleInputChange = () => {                  
    if (selectRef.current) {
      props.selectValue(selectRef.current.value);
    }
  };
  return (
    <div className={props.wrapperClass ?? "input__wrapper"}>
        <label className={props.labelClass ?? "input__label"}  htmlFor={props.selectId}>{props.labelText}</label>
        <select ref={selectRef} onChange={handleInputChange}  id={props.selectId}  className={props.selectClass ?? "select"}>
          {props.selectOptions.map((option, index)=>{
            return <option key={option.value+index} value={option.value}>{option.text}</option>
          })}
        </select>
    </div>
  )
}
