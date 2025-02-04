import { TopBar } from './components/organisms/TopBar/TopBar'
import {ContainerCard} from "./components/organisms/ContainerCard/ContainerCard"
import './Styles/Style.css'
import Footer from './components/organisms/Footer/Footer'

export function App() {
  return (
    <div className="wrapper">
      <TopBar/>
      <ContainerCard/>
      <Footer/>
    </div>
  )
}