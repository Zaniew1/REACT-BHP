import { Button } from '../../atoms/Button/Button';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';

type StoreDocsType = {
  docs: { name: string; size: string; src: string }[];
};
export const StoreDocs = (props: StoreDocsType) => {
  return (
    <div className={'storeDocs'}>
      <Paragraph class={'storeDocs__header'} text={'Dokumenty'} />
      <div className={'storeDocs__wrapper'}>
        {props.docs &&
          props.docs.map((el) => {
            return (
              <div className={'storeDocs__wrapper__doc'}>
                <div className={'storeDocs__wrapper__doc__img'}>
                  <img alt="Podgląd Dokumentu" src={el.src} />
                </div>
                <div>
                  <Paragraph text={el.name}></Paragraph>
                  <Paragraph text={el.size}></Paragraph>
                </div>
                <div>
                  <Button onClick={() => {}}></Button>
                </div>
                <div>
                  <Button onClick={() => {}}></Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
