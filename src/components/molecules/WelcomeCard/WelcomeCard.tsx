import {   useState } from "react";

type WelcomeType = {
    name?: string
    text?: string
}

export const WelcomeCard = (props: WelcomeType) => {
    const [displayedText, setDisplayedText] = useState(`Witaj KURWasdA ${props.name}, w czym mogę Ci dzisiaj pomóc?`);
  
  return (
    <div className="welcome">{displayedText}</div>
  )
}
