import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute.jsx';
// import Home from './pages/home.jsx'
// import Login from './pages/Login.jsx'
// import Groups from './pages/Groups.jsx'
// import Chat from './pages/Chat.jsx'
// import { lazy } from 'react'

const Home = lazy( () => import('./pages/home.jsx') );
const Login = lazy(() => import('./pages/Login.jsx')); 
const Groups = lazy(() => import('./pages/Groups.jsx'));
const Chat = lazy(() => import('./pages/Chat.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
        <Route path="/login" element={<ProtectRoute user={!user} redirect='/'>
          <Login />
        </ProtectRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
    );
};

export default App 