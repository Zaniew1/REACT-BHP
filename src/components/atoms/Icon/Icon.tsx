type IconPropsType = {
  class: 'icon--red' | 'icon--grey' | 'icon--yellow' | 'icon--green';
  children?: React.ReactNode;
};
// Ready classes: .icon-red,  .icon-green, .icon-gray, .icon-yellow
export const Icon = (props: IconPropsType): React.JSX.Element => {
  return <i className={props.class}>{props.children}</i>;
};
