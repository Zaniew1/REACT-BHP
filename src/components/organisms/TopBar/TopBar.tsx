import { Navigation } from "../../molecules/Navigation"
import { Header } from "../../molecules/Header"
 
 export const TopBar:React.FC = ():JSX.Element => {
    return (
        <div>
            <Header/>
            <Navigation/>
        </div>

    )
 }