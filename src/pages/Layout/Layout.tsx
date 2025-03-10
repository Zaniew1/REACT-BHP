import { Outlet } from 'react-router-dom';
import { TopBar } from '../../components/organisms/TopBar/TopBar';
import { ContainerCard } from '../../components/organisms/ContainerCard/ContainerCard';
import Footer from '../../components/organisms/Footer/Footer';

export const Layout = (): React.JSX.Element => {
  return (
    <>
      <TopBar />
      <ContainerCard>
        <Outlet />
      </ContainerCard>
      <Footer />
    </>
  );
};
