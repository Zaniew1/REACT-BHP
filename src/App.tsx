import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import RemindPassword from './pages/Auth/RemindPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { Home } from './pages/Home/Home';
import './Styles/Style.css';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/remindPassword'} element={<RemindPassword />}></Route>
        <Route path={'/resetPassword/:id'} element={<ResetPassword />}></Route>
        <Route path={'/register'} element={<Register />}></Route>
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
