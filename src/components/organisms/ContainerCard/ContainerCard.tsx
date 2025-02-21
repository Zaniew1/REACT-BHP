import { useState } from "react";
import { InputCheckbox } from "../../molecules/Input/Checkbox/InputCheckbox";
export const ContainerCard:React.FC = ():JSX.Element => {
    const [input, setInput] = useState<boolean>(false)
    console.log(input)
    return  (
        <main  className='container'>
            <InputCheckbox default={input} value={setInput} id={'aaaaaaa'} labelText={"Wybierz"} required={true}/>
        </main>
    );
}