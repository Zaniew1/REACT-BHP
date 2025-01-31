import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);
type ButtonType = {
    text: string,
    class: string,
    icon: IconProp
}
export const Button = (props: ButtonType ):React.JSX.Element => {
  return (
    <div className={props.class}>
        <FontAwesomeIcon icon={props.icon} />
        <p>{props.text}</p>
    </div>
  )
}
