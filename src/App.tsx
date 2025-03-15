import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RemindPassword from './pages/Auth/RemindPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { CompaniesList } from './pages/Companies/CompaniesList/CompaniesList';
import { Company } from './pages/Companies/Company/Company';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { TrainingsList } from './pages/Trainings/TrainingsList/TrainingsList';
import { WorkersList } from './pages/Workers/WorkersList/WorkersList';
import './Styles/Style.css';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="firmy" element={<CompaniesList />} />
          <Route path="firmy/:id" element={<Company />} />
          <Route path="firmy/:id/edycja" element={<Home />} />
          <Route path="firmy/:id/dodaj" element={<Home />} />
          <Route path="pracownicy" element={<WorkersList />} />
          <Route path="pracownicy/:id" element={<Home />} />
          <Route path="pracownicy/:id/edycja" element={<Home />} />
          <Route path="pracownicy/:id/dodaj" element={<Home />} />
          <Route path="szkolenia" element={<TrainingsList />} />
          <Route path="szkolenia/:id" element={<Home />} />
          <Route path="szkolenia/:id/edycja" element={<Home />} />
          <Route path="szkolenia/:id/dodaj" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="remindPassword" element={<RemindPassword />} />
        <Route path="resetPassword/:id" element={<ResetPassword />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}
{
  /* <Route path={'/createUser'} element={<Create/>}></Route>
<Route path={'/me'} element={<Me/>}></Route>
<Route path={'/CreateNewPost'} element={<CreateNewPost/>}></Route>
<Route path={'/editPost/:id'} element={<EditPost/>}></Route>
<Route path={'/:id'} element={<SinglePost/>}></Route>  */
}
