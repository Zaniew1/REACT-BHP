import { Navigation } from '../../molecules/Navigation/Navigation';
import { Header } from '../../molecules/Header/Header';

export const TopBar: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  );
};
