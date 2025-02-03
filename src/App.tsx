import { TopBar } from './components/organisms/TopBar/TopBar'
import {ContainerCard} from "./components/organisms/ContainerCard/ContainerCard"
import './Styles/Style.css'

export function App() {
  return (
    <div className="wrapper">
      <TopBar/>
      <ContainerCard/>
      
    </div>
  )
}