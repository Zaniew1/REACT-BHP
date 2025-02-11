import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
export const ContainerCard:React.FC = ():JSX.Element => {
    return  (
        <main  className='container'>
            <Routes>
                    <Route index element={<Home/>}></Route>
                    {/* <Route path={'/login'} element={<Login/>}></Route>
                    <Route path={'/forgetPassword'} element={<ForgetPassword/>}></Route>
                    <Route path={'/resetPassword/:id'} element={<Reset/>}></Route>
                    <Route path={'/changePassword'} element={<ChangePassword/>}></Route>
                    <Route path={'/createUser'} element={<Create/>}></Route>
                    <Route path={'/me'} element={<Me/>}></Route>
                    <Route path={'/CreateNewPost'} element={<CreateNewPost/>}></Route>
                    <Route path={'/editPost/:id'} element={<EditPost/>}></Route>
                    <Route path={'/:id'} element={<SinglePost/>}></Route>  */}
            </Routes> 
        </main>
    );
}