import { forwardRef } from 'react';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
type DropDocsType = {
  id?: string;
};
export const DropDocs = forwardRef<HTMLInputElement, DropDocsType>((props, ref) => {
  return (
    <div id={props.id} className="dropDocs">
      <input ref={ref} className="dropDocs__input" type="file" />
      <div className="dropDocs__wrapper">
        <Paragraph class={'dropDocs__wrapper__header'} text={'Dokumenty'}></Paragraph>
        <div className="dropDocs__wrapper__upload">
          <Paragraph
            class={'dropDocs__wrapper__upload__main'}
            text={'Upuść pliki tutaj lub kliknij aby przesłać'}
          ></Paragraph>
          <Paragraph
            class={'dropDocs__wrapper__upload__info'}
            text={'Pliki zostaną automatycznie przesłane na serwer'}
          ></Paragraph>
        </div>
      </div>
    </div>
  );
});
