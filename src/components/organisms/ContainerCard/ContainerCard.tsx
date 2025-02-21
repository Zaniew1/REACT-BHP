import {useState } from "react";
import { SelectWithSearch } from "../../molecules/Select/Select";
import { SelectOptionsType } from "../../molecules/Select/SelectTypes";
export const ContainerCard:React.FC = ():JSX.Element => {
    const optionsss = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
      const [options, setOptions] = useState<SelectOptionsType>(null)
       console.log(options)
    return  (
        <main  className='container'>
            <SelectWithSearch isRequired={true} isSearchable={true} value={setOptions} id={'asd'} options={optionsss} defaultValue={[{ value: "chocolate", label: "Chocolate" }]} labelText={"Wybierz słodycz"}/> 
        </main>
    );
}