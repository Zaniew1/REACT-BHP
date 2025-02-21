import { useState } from "react";
import { InputNumber } from "../../molecules/Input/Number/InputNumber";
export const ContainerCard:React.FC = ():JSX.Element => {
    const [input, setInput] = useState<string>('#b92727')
    console.log(input)
    return  (
        <main  className='container'>

            <InputNumber default={5} value={setInput} id={'aaaaaaa'} labelText={"Numer"} required={true} min={1} max={10}/>
        </main>
    );
}