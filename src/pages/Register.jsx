import React, { useState } from 'react';
import '../style.scss'
import { RxAvatar } from "react-icons/rx";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [user,setUser]=useState({
        username : '',
        email    : '',
        password : ''
    });
    const  registerUser=async (e)=>{
        e.preventDefault();
        let response = await axios.post("http://localhost:9090/user/" , user);
        console.log(response.data);
    }
    
    const handleInputChangeUser=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
        console.log(user);
    }


    return (
        <div className='formcontainer'>
            <div className='formwrapper'>

                <span className='logo'>C-chat</span> 
                <span className='title'>Register</span>
                <form action="" method='post' onSubmit={registerUser}>
                    <input type="text"  name="username" id="" placeholder='display name' onChange={handleInputChangeUser} />
                    <input type="email" required name="email" id=""  placeholder='email'  onChange={handleInputChangeUser} />
                    <input type="password" required name="password" id=""  placeholder='password'  onChange={handleInputChangeUser}/>
                    <input type="file" name="" id="file"  placeholder='' style={{display:'none'}}/>
                    <label htmlFor="file">
                    <RxAvatar size={30}/>
                    <span>add avatar</span>
                    </label>
                    <button type='submit'>Sign up</button>
                    <p>you have an account ? <Link to='/'>Login</Link></p>


                </form>
                    
            </div>            
        </div>
    );
}

export default Register;
