
export type ButtonType = {
    buttonText: string,
    buttonClass: string,
}
export const Button = (props: ButtonType ):React.JSX.Element => {
  return (
    <button className={props.buttonClass} >{props.buttonText}</button>
  )
}
