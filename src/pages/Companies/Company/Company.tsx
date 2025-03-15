import React from 'react';
// import { CompanyType } from '../CompaniesList/CompaniesList';
import { Button } from '../../../components/atoms/Button/Button';
import { useParams } from 'react-router-dom';
import {
  Building,
  Building2,
  GraduationCap,
  HardDriveDownload,
  ListCheck,
  Pencil,
  Shield,
  Trash,
  TriangleAlert,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { ElementsInformation } from '../../../components/organisms/ElementsInformation/ElementsInformation';
import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { Tile } from '../../../components/molecules/Tile/Tile';
import { Mars, Venus } from 'lucide-react';
import { DropDocs } from '../../../components/organisms/DropDocs/DropDocs';
import { StoreDocs } from '../../../components/organisms/StoreDocs/StoreDocs';
import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';
import { Link } from '../../../components/atoms/Link/Link';

export const Company = (): React.JSX.Element => {
  const { id } = useParams();
  const data = [
    [
      [
        {
          header: 'Dane Podstawowe',
          info: [
            { label: 'NIP', value: 'PL9662171478' },
            { label: 'REGON', value: '523876894' },
            { label: 'PKD', value: '6311Z' },
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
  ];
  return (
    <>
      <div className="company__info">
        <PathInformation
          style={{ marginBottom: '2rem' }}
          visibleSlash={true}
          paragraphText="Szczegóły firmy"
          linkText="Firmy"
          linkHref="/firmy"
        />
        <div className={'company__info__wrapper'}>
          <div className="company__info__wrapper__main">
            <ElementsInformation
              header={'Zaniewski Mateusz'}
              data={data}
              subheader={'15-635, ul.Polna 11 Klepacze'}
              modificationDate={new Date()}
            />
            <div className="company__info__wrapper__main__tiles">
              <Tile
                link={false}
                quantity={0}
                text={'Odziały'}
                iconColor="gray"
                icon={<Building2 />}
              />
              <Tile
                link={false}
                quantity={0}
                text={'Pracownicy'}
                iconColor="blue"
                icon={<UsersRound />}
              />
              <Tile link={false} quantity={0} text={'Kobiety'} iconColor="blue" icon={<Venus />} />
              <Tile link={false} quantity={0} text={'Mężczyźni'} iconColor="blue" icon={<Mars />} />
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
                text={'Kontrole'}
                iconColor="gray"
                icon={<ListCheck />}
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
                Szkolenie
              </Button>
              <Button
                style={{ width: '80%', margin: '0.5rem 0' }}
                class="button--gray"
                onClick={() => {}}
              >
                Kontrola
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
                <HardDriveDownload />
                <Paragraph class={'navigation_paragraph'} text={'Import Pracowników'} />
              </Button>
              <Button class={'button--none'} onClick={() => {}}>
                <UserRound />
                <Paragraph class={'navigation_paragraph'} text={'Dodaj pracownika'} />
              </Button>
              <Button class={'button--none'} onClick={() => {}}>
                <Building />
                <Paragraph class={'navigation_paragraph'} text={'Dodaj oddział'} />
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
