import { OptionType } from '../components/molecules/Select/SelectTypes';

export const formsOfEmployment: OptionType[] = [
  { value: 'contract_trial_period', label: 'Umowa o pracę na okres próbny' },
  { value: 'contract_specified_time', label: 'Umowa o pracę na czas określony' },
  { value: 'contract_indefinite_period', label: 'Umowa o pracę na czas nieokreślony' },
  { value: 'replacement_contract', label: 'Umowa na zastępstwo' },
  { value: 'contract_for_specific', label: 'Umowa na czas wykonania określonej pracy' },
  { value: 'contract_by_appointment', label: 'Umowa na podstawie powołania' },
  { value: 'contract_by_choice', label: 'Umowa na podstawie wyboru' },
  { value: 'contract_by_nominate', label: 'Umowa na podstawie mianowania' },
  { value: 'cooperative_contract', label: 'Spółdzielcza umowa o pracę' },
  { value: 'contract_work', label: 'Umowa o dzieło (art. 627-646 kc)' },
  { value: 'contract_of_mandate', label: 'Umowa zlecenie (art. 734-751 kc)' },
  { value: 'agency_agreement', label: 'Umowa agencyjn (art. 758-764 kc)' },
  {
    value: 'management_contract',
    label: 'Kontrakt menedżerski (umowa o zarządzanie, kontrakt kierowniczy) (art. 734-751 kc)',
  },
  { value: 'home_employment_contract', label: 'Umowa o pracę nakładczą' },
  { value: 'self_employed', label: 'Samozatrudnienie' },
];
export const sexes: OptionType[] = [
  { value: 'men', label: 'Mężczyzna' },
  { value: 'women', label: 'Kobieta' },
];

export const absenceTypes: OptionType[] = [
  { value: '', label: 'Brak' },
  { value: 'sick', label: 'Choroba' },
  { value: 'long_term_sick', label: 'Długotrwała choroba' },
  { value: 'free', label: 'Urlop bezpłatny' },
  { value: 'maternity', label: 'Urlop macierzyński' },
  { value: 'carer', label: 'Urlop opiekuńczy' },
  { value: 'parental', label: 'Urlop wychowawczy' },
  { value: 'health', label: 'Urlop zdrowotny' },
  { value: 'leave', label: 'Zakończenie stosunku pracy' },
];
export const disablityTypes: OptionType[] = [
  { value: 'no', label: 'Nie' },
  { value: 'low', label: 'Lekka' },
  { value: 'medium', label: 'Umiarkowana' },
  { value: 'high', label: 'Znaczna' },
];
export const yesNoTypes: OptionType[] = [
  { value: 'false', label: 'Nie' },
  { value: 'true', label: 'Tak' },
];
export const positionType: OptionType[] = [
  { value: '0', label: 'Kierownicze' },
  { value: '1', label: 'Inżynieryjno-techniczne' },
  { value: '2', label: 'Administracyjno-biurowe' },
  { value: '3', label: 'Robotnicze' },
  { value: '4', label: 'Inne' },
];
