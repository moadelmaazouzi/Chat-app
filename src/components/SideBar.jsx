import React, { useContext, useEffect, useState } from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Chats from './Chats';
import {User} from '../pages/Home';
import axios from 'axios';

const SideBar = () => {
    const user =useContext(User)
    const [userch, setUserch] = useState(null);
    
   
    
      

      // Inside the getUserChats function, update the state
      const getUserChats = async () => {
        try {
          const res = await axios.get("http://localhost:9090/user/");
          setUserch(res.data); // Assuming res.data is the user data from the response
        } catch (error) {
          console.error("Error fetching user chats:", error);
        }
      };
      useEffect(()=>{getUserChats()},[])
    
    console.log(userch);
    if (!user) {
        // Si user est null, affichez un contenu alternatif ou rien du tout
        return null;
      }
    return (
        <div className='sidebar'>
            <NavBar ></NavBar>
            <Search></Search>
            {userch &&
        userch
          .filter((ele) => user.email !== ele.email).map((ele, index) => (
            
            
        
          <Chats key={index} nom={ele.username} message={ele.etat}></Chats>
        ))}
            
            
        </div>
    );
}

export default SideBar;
