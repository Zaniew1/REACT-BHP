type ContainerCardType = {
  children: React.ReactNode;
};
export const ContainerCard = (props: ContainerCardType): JSX.Element => {
  return <main className="container">{props.children}</main>;
};
