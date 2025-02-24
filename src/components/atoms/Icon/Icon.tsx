type IconPropsType = {
  iconClass: string;
  children?: React.ReactNode;
};
// Ready classes: .icon-red,  .icon-green, .icon-gray, .icon-yellow
export const Icon = (props: IconPropsType): React.JSX.Element => {
  return <i className={props.iconClass}>{props.children}</i>;
};
