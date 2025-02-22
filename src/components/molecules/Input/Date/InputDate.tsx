import React from 'react';
import { Label } from '../../Label/Label';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import { Polish } from 'flatpickr/dist/l10n/pl.js';

type InputDateType = {
  value: (value: number[]) => void;
  id: string;
  mode?: 'single' | 'multiple' | 'range';
  default?: number[];
  labelText?: string;
  required?: boolean;
  labelClass?: string;
  wrapperClass?: string;
  dateFormat?: string;
  minDate?: string | Date;
  maxDate?: string | Date;
};
export const InputDate = (props: InputDateType): React.JSX.Element => {
  const handleInput = (date: Date[]) => {
    const dates = date.map((el) => {
      return new Date(el).getTime();
    });
    props.value(dates);
  };

  return (
    <Label
      labelText={props.labelText}
      labelClass={props.labelClass}
      wrapperClass={props.wrapperClass}
      id={props.id}
      required={props.required}
    >
      <Flatpickr
        id={props.id}
        options={{
          locale: Polish,
          mode: props.mode ?? 'single',
          defaultDate: props.default ?? [new Date()],
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d',
          minDate: props.minDate,
          maxDate: props.maxDate,
        }}
        onChange={(date: Date[]) => {
          handleInput(date);
        }}
      />
    </Label>
  );
};
