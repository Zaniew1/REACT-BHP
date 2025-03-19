import { CSSProperties } from 'react';
import { SingleValue, MultiValue } from 'react-select';

export type SelectOptionsType = SingleValue<OptionType> | MultiValue<OptionType>;
export type OptionType = { value: string; label: string };
export type SelectType = {
  defaultValue?: string | number | boolean;
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
