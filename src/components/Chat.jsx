import React from 'react';
import { CiVideoOn  } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Moad</span>
                <div className="chatIcons">
                <CiVideoOn size={'17px'}/>
                
                <FaUserPlus size={'17px'}/>
                <IoIosMore size={'17px'}/>
                
                </div>
                
            </div>
            <Messages/>
            <Input></Input>
        </div>
    );
}

export default Chat;
