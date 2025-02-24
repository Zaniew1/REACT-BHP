import React from 'react';
import { TopBar } from '../../components/organisms/TopBar/TopBar';
import { ContainerCard } from '../../components/organisms/ContainerCard/ContainerCard';
import Footer from '../../components/organisms/Footer/Footer';

export const Home = (): React.JSX.Element => {
  return (
    <div id="page_home">
      <TopBar />
      <ContainerCard />
      <Footer />
    </div>
  );
};
{
  /* 
                    <Route path={'/me'} element={<Me/>}></Route>
                    <Route path={'/editPost/:id'} element={<EditPost/>}></Route>
                    <Route path={'/:id'} element={<SinglePost/>}></Route>  */
}
