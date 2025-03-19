import { CSSProperties, forwardRef } from 'react';
import Select, { SelectInstance } from 'react-select';
import makeAnimated from 'react-select/animated';
import { customStyles } from './SelectStyles';
// import { SelectType } from './SelectTypes';
import { Label } from '../Label/Label';

const animatedComponents = makeAnimated();
export type SelectType = {
  defaultValue?: string;
  id?: string;
  options: { value: string; label: string }[];
  labelText?: string;
  labelClass?: string;
  selectClass?: string;
  wrapperClass?: string;
  wrapperStyle?: CSSProperties;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRequired?: boolean;
  testData?: string;
};

export const Selectr = forwardRef<SelectInstance<SelectType, false>, SelectType>((props, ref) => {
  const defaultValueSelect = props.options.filter((el) => el.value === props.defaultValue);
  return (
    <Label
      id={props.id}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      wrapperStyle={props.wrapperStyle}
      required={props.isRequired}
      labelText={props.labelText}
    >
      <Select
        ref={ref}
        id={props.id}
        placeholder={'Wybierz..'}
        closeMenuOnSelect={false}
        data-cy={props.testData}
        components={animatedComponents}
        defaultValue={defaultValueSelect[0]}
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
