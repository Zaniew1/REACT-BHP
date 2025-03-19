import { Icon } from '../../atoms/Icon/Icon';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
type ElementsInformationType = {
  header?: string;
  subheader?: string;
  additionalInfoHeader?: string;
  additionalInfoColor?: 'red' | 'green' | 'yellow' | 'gray';
  data?: {
    header: string;
    info: {
      label: string;
      value: string | number | React.ReactNode | null;
      sensitive?: boolean;
    }[];
  }[][][];
  modificationDate?: Date;
};

export const ElementsInformation = (props: ElementsInformationType) => {
  return (
    <div className="elementsInformation">
      <div className={'elementsInformation__header'}>
        <div className={'elementsInformation__header__main'}>{props.header}</div>
        {props.additionalInfoHeader && (
          <Icon
            style={{ width: '10%', marginRight: '2rem' }}
            class={`icon--${props.additionalInfoColor}`}
          >
            {props.additionalInfoHeader}
          </Icon>
        )}
      </div>
      <div className={'elementsInformation__subheader'}>{props.subheader}</div>
      {props.data &&
        props.data.map((row) => {
          return (
            <div key={Math.random() * 10000} className={'elementsInformation__row'}>
              {row.map((column) => {
                return (
                  <div key={Math.random() * 10000} className={'elementsInformation__row__column'}>
                    {column.map((data) => {
                      return (
                        <div key={Math.random() * 10000}>
                          <Paragraph
                            key={Math.random() * 10000}
                            class={'elementsInformation__row__column__header'}
                            text={data.header}
                          ></Paragraph>
                          <div
                            key={Math.random() * 10000}
                            className={'elementsInformation__row__column__data'}
                          >
                            {data.info.length &&
                              data.info.map((informations) => {
                                return (
                                  <div
                                    key={Math.random() * 10000}
                                    className={'elementsInformation__row__column__data__rows'}
                                  >
                                    <div
                                      key={Math.random() * 10000}
                                      className={
                                        'elementsInformation__row__column__data__rows__label'
                                      }
                                    >
                                      {informations.label}:
                                    </div>
                                    <div
                                      key={Math.random() * 10000}
                                      className={
                                        'elementsInformation__row__column__data__rows__value'
                                      }
                                    >
                                      {informations.value != null ? informations.value : '-'}
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      <div className={'elementsInformation__moddate'}>
        {props.modificationDate &&
          'Ostatnia modyfikacja: ' + String(props.modificationDate?.toLocaleString())}
      </div>
    </div>
  );
};
