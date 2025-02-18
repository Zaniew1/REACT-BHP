import { useState } from "react";
import { Select } from "../../molecules/Select";

export const ContainerCard:React.FC = ():JSX.Element => {
    const selectOption = [
        {value: '1', text: 'opcja1'},
        {value: '2', text: 'opcja2'},
        {value: '3', text: 'opcja3'},
        {value: '4', text: 'opcja4'},
        {value: '5', text: 'opcja5'}
    ]
    const [a, seta] = useState<string>('')
    console.log(a)
    return  (
        <main  className='container'>
            <Select labelText={"GÓWNO"} selectValue={seta} selectId="asdasd" selectOptions={selectOption}/>
                  
        </main>
    );
}