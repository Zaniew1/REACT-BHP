import React from 'react';
import { Link } from '../../atoms/Link/Link';
import { Pencil, SquareMenu, Trash2 } from 'lucide-react';
// import {  EllipsisVertical} from 'lucide-react';
import { Button } from '../../atoms/Button/Button';

type TableActionsType = {
  id: string;
  oper: 'firmy' | 'pracownicy' | 'szkolenia' | 'kontrole';
  showAdditionalOptions?: boolean;
};
export const TableActions = (props: TableActionsType): React.JSX.Element => {
  return (
    <div className={'table__actions'}>
      <Link
        style={{ display: 'flex', alignItems: 'center' }}
        target={'_self'}
        href={`/${props.oper}/${props.id}`}
      >
        <SquareMenu size={20} />
      </Link>
      <Link
        style={{ display: 'flex', alignItems: 'center' }}
        href={`/${props.oper}/${props.id}/edycja`}
      >
        <Pencil size={20} />
      </Link>
      <Button
        style={{ display: 'flex', alignItems: 'center', margin: '0', padding: '0' }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Trash2 size={20} />
      </Button>
      {/* { props.showAdditionalOptions &&
        <Button
          style={{ padding: 0, margin: 0, alignItems: 'center' }}
          type={'button'}
          onClick={(e) => {e.stopPropagation(); console.log('123')}}
        >
          <EllipsisVertical size={20}/>
        </Button>
      } */}
    </div>
  );
};
