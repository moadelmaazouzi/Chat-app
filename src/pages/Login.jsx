import React, {  useContext, useState } from 'react';
import '../style.scss'
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate,  } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    //
    

    //
    const history = useNavigate();
    const [user,setUser]=useState({email:'',password:''});
    let userresponse=null;
    const handleChange=(e)=>{
        setUser({...user ,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post("http://localhost:9090/user/valide",user);
        userresponse=response.data;
        
        if(response.data.email===user.email)
            history(`/home/${userresponse.id_user}`);
           
    }

    return (
        
        <div className='formcontainer'>
            <div className='formwrapper'>

                <span className='logo'>C-chat</span> 
                <span className='title'>Login</span>
                <form action="" method='' onSubmit={handleSubmit}>
                    
                    <input type="email" required name="email" id="" value={user.email} placeholder='email' onChange={handleChange}/>
                    <input type="password" required name="password" id="" value={user.password} placeholder='password' onChange={handleChange}/>
                    
                    <button>Sign in</button>
                    <p>you don't  have an account ? <Link to="/register">Register</Link></p>


                </form>
                    
            </div>            
        </div>
        
    );
}

export default Login;


