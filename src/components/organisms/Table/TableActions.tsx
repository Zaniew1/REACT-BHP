import React from 'react';
import { Link } from '../../atoms/Link/Link';
import { EllipsisVertical, Pencil, SquareMenu, Trash2 } from 'lucide-react';
import { Button } from '../../atoms/Button/Button';

export const TableActions = (): React.JSX.Element => {
  return (
    <div className={'table__actions'}>
      <Link linkHref="/">
        <SquareMenu />
      </Link>
      <Link linkHref="/">
        <Pencil />
      </Link>
      <Link linkHref="/">
        <Trash2 />
      </Link>
      <Button
        style={{ padding: 0, margin: 0, alignItems: 'flex-start' }}
        type={'button'}
        onClick={() => {}}
      >
        <EllipsisVertical />
      </Button>
    </div>
  );
};
