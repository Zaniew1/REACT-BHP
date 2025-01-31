import { Header } from './components/organisms/Header/Header'
import {ContainerCard} from "./components/organisms/ContainerCard/ContainerCard"
import './Styles/Style.css'

export function App() {
  return (
    <div className="wrapper">
      <Header/>
      <ContainerCard/>
      
    </div>
  )
}