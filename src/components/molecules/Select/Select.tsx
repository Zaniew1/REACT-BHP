import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { customStyles } from "./SelectStyles";
import { SelectOptionsType, SelectType } from "./SelectTypes";
import { Label } from "../Label/Label";

const animatedComponents = makeAnimated();

export const SelectWithSearch = (props: SelectType): React.JSX.Element => {
  const [options, setOptions] = useState<SelectOptionsType>(props.defaultValue ?? null);
  const valueRef = useRef(props.value);

  useEffect(() => {
    valueRef.current = props.value;
  }, [props.value]);
  useEffect(() => {
    valueRef.current(options);
  }, [options]);

  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.isRequired}
      labelText={props.labelText}
    >
      <Select
        id={props.id}
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={props.defaultValue}
        options={props.options}
        styles={customStyles}
        isMulti={props.isMulti ?? false}
        isDisabled={props.isDisabled ?? false}
        isLoading={props.isLoading ?? false}
        isClearable={props.isClearable ?? false}
        isSearchable={props.isSearchable ?? false}
        required={props.isRequired ?? false}
        onChange={setOptions}
      />
    </Label>
  );
};
