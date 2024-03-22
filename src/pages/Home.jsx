import React, { createContext, useContext, useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import Chat from '../components/Chat';
import '../style.scss'
import Chats from '../components/Chats';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const User=createContext();
export default function Home (){
    const {id}=useParams();
    const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserBdd = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/user/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la requête:', error);
      }
    };

    getUserBdd();
  }, [id]);
    
  
    
    return (
        <User.Provider value={user}>
            <div className='home'>
                <div className="container">
                    <SideBar></SideBar>
                    <Chat></Chat>

                </div>
            </div>
        </User.Provider>
    );
}


