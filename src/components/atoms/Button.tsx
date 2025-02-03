
export type ButtonType = {
    buttonClass: string,
    children?: React.ReactNode;
    buttonClick: ()=> void

}
// type ChildrenType = {
// }
export const Button = (props: ButtonType ):React.JSX.Element => {
  return (
    <button className={props.buttonClass} onClick={props.buttonClick} >{props.children}</button>
  )
}
