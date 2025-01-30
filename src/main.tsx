import { createRoot } from 'react-dom/client'
import {App} from './App'
import './Styles/Style.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
