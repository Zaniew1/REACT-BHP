
type LinkType = {
    class: string,
    href:string,
    text?: string,
    target?: "_blank" | "_parent" | "_self" | "_top";
}

export const Link = (props:LinkType):React.JSX.Element => {
  return (
    <a className={props.class} href={props.href} target={props.target ?? "_blank"}>{props.text}</a>
  )
}
