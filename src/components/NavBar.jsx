import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {User} from '../pages/Home';
const NavBar = () => {
    const user =useContext(User);
    if (!user) {
        // Si user est null, affichez un contenu alternatif ou rien du tout
        return null;
      }
    
    
    return (
        <div className='navbar'>
            <span className='logo'>C-chat</span>
            <div className="user">
                <img src="../images/images.jpg" alt="images" />
                <span>{user.username}</span>
                <button type="button"><Link to='/' style={{textDecoration:'none'}}>log out</Link></button>
            </div>
        </div>
    );
}

export default NavBar;
