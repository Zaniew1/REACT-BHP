import { Logo } from "../../atoms/Logo"

 
 export const Header:React.FC = ():JSX.Element => {
    return (
        <header>
            <div className="logo_container">
                <Logo/>
                <Settings/>
            </div>
           
        </header>

    )
 }