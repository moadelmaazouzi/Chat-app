import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';

const user=createContext();

function App() {
  return (
  
    <div className="App">
     
     <BrowserRouter >
      <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='home/:id' element={<Home/>}/>
      </Routes>
     </BrowserRouter>

     
      
    </div>
    
  );
}

export default  App ;
