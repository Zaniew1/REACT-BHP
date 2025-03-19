type SeparatorLineType = {
  text: string;
};

export const SeparatorLine = (props: SeparatorLineType) => {
  return (
    <div className={'separator'}>
      <span className={'separator__left'}></span>
      <span className={'separator__text'}>{props.text}</span>
      <span className={'separator__right'}></span>
    </div>
  );
};
