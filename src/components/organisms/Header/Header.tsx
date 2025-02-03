import { Logo } from "../../atoms/Logo"
import { Navigation } from "../../molecules/Navigation"
import { Settings } from "../../molecules/Settings"

 
 export const Header:React.FC = ():JSX.Element => {
    return (
        <header>
            <div className="logo_container">
                <Logo/>
                <Settings/>
            </div>
            <Navigation/>
           
        </header>

    )
 }