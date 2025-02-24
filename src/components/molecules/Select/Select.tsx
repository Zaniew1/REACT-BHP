import { forwardRef } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { customStyles } from './SelectStyles';
import { SelectType } from './SelectTypes';
import { Label } from '../Label/Label';

const animatedComponents = makeAnimated();

export const SelectWithSearch = forwardRef<StateManagedSelect, SelectType>((props, ref) => {
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      required={props.isRequired}
      labelText={props.labelText}
    >
      <Select
        ref={ref}
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
      />
    </Label>
  );
});
