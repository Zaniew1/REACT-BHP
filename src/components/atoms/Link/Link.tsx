export type LinkType = {
  linkClass?: string;
  linkHref: string;
  linkTarget?: '_blank' | '_parent' | '_self' | '_top';
  children?: React.ReactNode;
};

export const Link = (props: LinkType): React.JSX.Element => {
  return (
    <a
      name={'asd'}
      className={props.linkClass ?? 'link'}
      href={props.linkHref}
      target={props.linkTarget ?? '_blank'}
    >
      {props.children}
    </a>
  );
};
