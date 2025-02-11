
export type ButtonType = {
    buttonClass: string,
    children?: React.ReactNode;
    buttonClick: ()=> void;
    rest?: any;

}

export const Button = (props: ButtonType ):React.JSX.Element => {
  return (
    <button className={props.buttonClass} {...props.rest} onClick={props.buttonClick} >{props.children}</button>
  )
}
