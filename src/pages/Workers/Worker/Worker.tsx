import React from 'react';
import { Button } from '../../../components/atoms/Button/Button';
import { useParams } from 'react-router-dom';
import { File, GraduationCap, ListCheck, Pencil, Shield, Trash, TriangleAlert } from 'lucide-react';
import { ElementsInformation } from '../../../components/organisms/ElementsInformation/ElementsInformation';
import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { Tile } from '../../../components/molecules/Tile/Tile';
import { DropDocs } from '../../../components/organisms/DropDocs/DropDocs';
import { StoreDocs } from '../../../components/organisms/StoreDocs/StoreDocs';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';
import { Link } from '../../../components/atoms/Link/Link';

export const Worker = (): React.JSX.Element => {
  const { id } = useParams();
  //   const workerData = useGetWorkerData(id);
  const data = [
    [
      [
        {
          header: 'Dane wrażliwe',
          info: [
            { label: 'PESEL', value: '95100411234' },
            { label: 'Nr dowodu os.', value: 'AXD 123123' },
            { label: 'Data urodzenia', value: String(new Date().toLocaleString()) },
            { label: 'Miejsce urodzenia', value: 'Białystok' },
            { label: 'Niepełnosprawność', value: 'Nie' },
          ],
        },
      ],
      [
        {
          header: 'Dane kontakowe',
          info: [
            { label: 'Telefon', value: '' },
            { label: 'Email', value: '' },
          ],
        },
      ],
    ],
    [
      [
        {
          header: 'Dane Firmowe',
          info: [
            { label: 'Firma', value: <Link href="/firmy/1">ZanIT - Mateusz Zaniewski</Link> },
            { label: 'Forma zatrudnienia', value: '' },
            { label: 'Nieobecność', value: '' },
          ],
        },
      ],
    ],
    [
      [
        {
          header: 'Stanowisko',
          info: [
            { label: 'Nazwa', value: 'asd' },
            { label: 'Rodzaj', value: '' },
            { label: 'Dział', value: 'asd' },
            { label: 'Pracownik młodociany', value: 'Nie' },
            { label: 'Praca w porze nocnej', value: 'Tak' },
          ],
        },
      ],
    ],
  ];
  return (
    <>
      <div className="company__info">
        <PathInformation
          style={{ marginBottom: '2rem' }}
          visibleSlash={true}
          paragraphText="Szczegóły pracownika"
          linkText="Pracownicy"
          linkHref="/pracownicy"
        />
        <div className={'company__info__wrapper'}>
          <div className="company__info__wrapper__main">
            <ElementsInformation
              header={'Zaniewski Mateusz'}
              data={data}
              modificationDate={new Date()}
            />
            <div className="company__info__wrapper__main__tiles">
              <Tile
                link={false}
                quantity={0}
                text={'Szkolenia'}
                iconColor="green"
                icon={<GraduationCap />}
              />
              <Tile
                link={false}
                quantity={0}
                text={'Wypadki'}
                iconColor="red"
                icon={<TriangleAlert />}
              />
              <Tile
                link={false}
                quantity={0}
                text={'Oceny ryzyka'}
                iconColor="yellow"
                icon={<Shield />}
              />
              <Tile
                link={false}
                quantity={0}
                text={'Skierowania na badania'}
                iconColor="gray"
                icon={<ListCheck />}
              />
            </div>
            <DropDocs />
            <StoreDocs docs={null} />
          </div>
          <div className="company__info__history"></div>
          <aside className="company__info__buttons">
            <div className="company__info__buttons__wrapper">
              <Button
                style={{ width: '80%', margin: '0.5rem 0' }}
                class="button--blue"
                onClick={() => {}}
              >
                Skierowanie na badanie
              </Button>
              <Button
                style={{ width: '80%', margin: '0.5rem 0' }}
                class="button--gray"
                onClick={() => {}}
              >
                Szkolenie
              </Button>
              <Button
                style={{ width: '80%', margin: '0.5rem 0' }}
                class="button--gray"
                onClick={() => {}}
              >
                Wypadek
              </Button>
              <Button
                style={{ width: '80%', margin: '0.5rem 0' }}
                class="button--gray"
                onClick={() => {}}
              >
                Ocena ryzyka
              </Button>
            </div>
            <div style={{ marginTop: '1.5rem' }} className="company__info__buttons__wrapper2">
              <Button class={'button--none'} onClick={() => {}}>
                <File />
                <Paragraph class={'navigation_paragraph'} text={'Dodaj uprawnienie'} />
              </Button>
              <div className="company__info__buttons__wrapper2__btn">
                <Link class={'company__info__buttons__wrapper2__link'} href={'/firmy'}>
                  <Pencil />
                  <Paragraph class={'navigation_paragraph'} text={'Edytuj'} />
                </Link>
                <Button class={'button--none'} onClick={() => {}}>
                  <Trash />
                  <Paragraph class={'navigation_paragraph'} text={'Usuń'} />
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};
