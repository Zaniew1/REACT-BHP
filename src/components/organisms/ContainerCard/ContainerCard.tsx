import {  Trash } from "lucide-react";
import { Button } from "../../atoms/Button";

export const ContainerCard:React.FC = ():JSX.Element => {
    return  (
        <main  className='container'>
           <Button disabled={true} class={"button__delete"} onClick={()=>{}} type={'button'}><Trash/>{"Nowa Firma"}</Button>
                  
        </main>
    );
}