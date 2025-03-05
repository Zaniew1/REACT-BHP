import { CSSProperties } from "react";

export type LinkType = {
  class?: string;
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  children?: React.ReactNode;
  style?: CSSProperties
};

export const Link = (props: LinkType): React.JSX.Element => {
  return (
    <a
      style={props.style}
      className={props.class ?? 'link'}
      href={props.href}
      target={props.target ?? '_self'}
    >
      {props.children}
    </a>
  );
};
