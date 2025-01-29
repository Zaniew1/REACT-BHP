import { Header } from '../Header/Header';
import {ReactNode} from 'react';
type ChildrenType = {
    children: ReactNode
}
export const ContainerCard:React.FC<ChildrenType> = (props):JSX.Element => {
    return  (
        <main  className=''>
           
            <div className=''>
                <Header/>
                {props.children}
            </div>
        </main>
    );
}