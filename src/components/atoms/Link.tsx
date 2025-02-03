
export type LinkType = {
  linkClass: string,
  linkHref:string,
  linkText?: string,
  linkTarget?: "_blank" | "_parent" | "_self" | "_top";
}

export const Link = (props:LinkType):React.JSX.Element => {
  return (
    <a className={props.linkClass} href={props.linkHref} target={props.linkTarget ?? "_blank"}>{props.linkText}</a>
  )
}
