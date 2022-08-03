import './App.css';
import Register from './components/register';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './components/SignIn';
import toast, { Toaster } from 'react-hot-toast';
import Home from './components/Home';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#050e1d]">
    <Toaster position='top-right' />
      <div className="w-3/4 h-3/4 flex justify-center items-center bg-white rounded-2xl drop-shadow-2xl ">
      <div className='w-1/2 h-full flex justify-center items-center'>
        <img className='w-full h-full rounded-2xl ' src='https://images.unsplash.com/photo-1651204978999-00d7ce1b078a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80' />
      </div>
      <div className='w-1/2 h-full flex justify-center items-center '>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="register" element={<Register/>} />
        <Route path="home" element={<Home/>} />
      </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
