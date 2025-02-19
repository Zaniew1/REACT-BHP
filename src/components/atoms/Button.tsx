
export type ButtonType = {
    class?: string,
    children?: React.ReactNode | string;
    onClick: ()=> void;
    disabled?:boolean;
    type: "button" | "submit" | "reset";
    form?: string;
    name?:string
}

export const Button = (props: ButtonType ):React.JSX.Element => {
  return (
    <button className={props.class ?? "button"}  form={props.form} onClick={props.onClick} disabled={props.disabled} >{props.children}</button>
  )
}
