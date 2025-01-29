 

 export const Header:React.FC = ():JSX.Element => {
    return (
        <header>
            <div className="logo">
                <div className="logo_container">
                    <img className="logo_container" src=""/>
                </div>
                <div  id="managment"></div>
            </div>
            <nav className="nav">
                <ul className= "nav_list">
                    <li className="nav_list_element">Firmy</li>
                    <li className="nav_list_element">Pracownicy</li>
                    <li className="nav_list_element">Szkolenia</li>
                </ul>
            </nav>
        </header>

    )
 }