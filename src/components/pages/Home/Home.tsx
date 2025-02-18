import React from 'react'
import { TopBar } from '../../organisms/TopBar/TopBar'
import { ContainerCard } from '../../organisms/ContainerCard/ContainerCard'
import Footer from '../../organisms/Footer/Footer'

export const Home = ():React.JSX.Element => {
  return (
    <div id="page_home">
      <TopBar/>
      <ContainerCard/>
      <Footer/>
    </div>
  )
}
  {/* 
                    <Route path={'/me'} element={<Me/>}></Route>
                    <Route path={'/editPost/:id'} element={<EditPost/>}></Route>
                    <Route path={'/:id'} element={<SinglePost/>}></Route>  */}