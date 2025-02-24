import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Label } from '../../Label/Label';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import { Polish } from 'flatpickr/dist/l10n/pl.js';

type InputDateType = {
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
export const InputDate = forwardRef<HTMLInputElement, InputDateType>((props, ref) => {
  const flatpickrRef = useRef<HTMLInputElement | null>(null);
  useImperativeHandle(ref, () => flatpickrRef.current as HTMLInputElement);

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
        onReady={(_, __, flatpickrInstance) => {
          flatpickrRef.current = flatpickrInstance.input;
        }}
      />
    </Label>
  );
});
