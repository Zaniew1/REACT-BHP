import { SingleValue, MultiValue } from "react-select";

export type SelectOptionsType = SingleValue<OptionType> | MultiValue<OptionType>;
export type OptionType = { value: string; label: string };
export type SelectType = {
  defaultValue?: { value: string; label: string }[] | null;
  value: (value: SingleValue<OptionType> | MultiValue<OptionType> | null) => void;
  id: string;
  options: { value: string; label: string }[];
  labelText?: string;
  labelClass?: string;
  selectClass?: string;
  wrapperClass?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRequired?: boolean;
};
