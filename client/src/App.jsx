import React, { lazy } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './pages/home.jsx'
// import Login from './pages/Login.jsx'
// import Groups from './pages/Groups.jsx'
// import Chat from './pages/Chat.jsx'
// import { lazy } from 'react'

const Home = lazy( () => import('./pages/home.jsx') );
const Login = lazy(() => import('./pages/Login.jsx')); 
const Groups = lazy(() => import('./pages/Groups.jsx'));
const Chat = lazy(() => import('./pages/Chat.jsx'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    )
}

export default App 