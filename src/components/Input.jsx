import React, { useContext, useState } from 'react';
import { MdAttachFile } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { IoMdImages } from "react-icons/io";
import {User} from '../pages/Home';
import axios from 'axios';
const Input = () => {
    const user =useContext(User);
    const [inputValue, setInputValue] = useState('');
    if (!user) {
        // Si user est null, affichez un contenu alternatif ou rien du tout
        return null;
      }
      console.log(user);
      

      // Event handler for input change
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
      const savemessage=async ()=>{
        let data={
            "emmetteur":user,
            "contenent":document.getElementById("ip").value
        }
            const res=await axios.post("http://localhost:9090/message/",data);
            document.getElementById("ip").value=''
      }

    return (
        <div className='input'>
            <input type="text" name="" id="ip" value={inputValue} onChange={handleInputChange} placeholder='type something ...' />
            
            <div className="send">
                
                <label htmlFor="file"><MdAttachFile size={'24px'}  /></label>
                <input type="file" name="" id="file"  style={{display:'none'}} />
                <IoMdImages size={'24px'}/>
                <button type="button" onClick={savemessage}><BsSend size={'24px'} /></button>

            </div>
        </div>
    );
}

export default Input;
