import React, { useState, useContext } from 'react'
import src from '../Images/Login_Icon.png'
import {motion} from "framer-motion";
import axios from 'axios';
import UserProvider from '../Context/User.provider';
import configure from '../Conf/configure';
function Login() {
    const [password, setPassword]= useState("");
    const [email,setEmail]=useState("");
    const [year,setYear]=useState("");
    const [admin,setAdmin]=useState(false);

    const updatepassword=(e)=>{
        setPassword(e.target.value);
    }
    const updateadmin=()=>{
        setAdmin(!admin);
    }
    
    const updateemail=(e)=>{
        setEmail(e.target.value);
    }
    const updateyear=(e)=>{
        setYear(e.target.value);
    }
    const submit=(e)=>{
        e.preventDefault(); 
        const value={
            email, 
            password:password,
            year:year,
            admin
        }        
        axios.post(`${configure.Endpoint}/Login`, value,{
            withCredentials: true  
        })
        .then((response) => {  
            console.log(response.data); 
            localStorage.setItem('sessionId',true);
            window.location.href = "/";  
        })
        .catch((error) => {  
            console.error(error);   
            alert("Didn't LogIn");
        });
    }
  return (

    <div className=' h-[100svh] overflow-hidden  p-[4rem] flex justify-around bg-login bg-cover'>
        <div className='h-[85svh] w-[40%] p-[4rem] opacity-85 bg-gray-100 shadow-2xl' >
            <h1 className='text-5xl opacity-100  mb-2 font-bold'>Hi There!</h1>
            <p className=' opacity-100 '>Have We Met Before?</p>
            <form className='flex mt-[4vh] opacity-100  w-[80%] mx-auto flex-col  ' method="POST">
                <label >
                    <h1 className='mb-2'> Email:</h1>
                    <input className='mb-8 border-2 border-gray-200 w-full h-[3rem]' name="email" value={email} onChange={updateemail} type='text' placeholder='email' />
                </label>
                <label >
                    <h1 className='mb-2'> Password</h1>
                    <input  className='mb-8 border-2 border-gray-200 w-full h-[3rem]' type="password" name="password" value={password} onChange={updatepassword} placeholder='password' />
                </label>
                <label >
                    <span className='mb-2 mr-4 '> Teacher:</span>
                    <input className='mb-8 border-2 border-gray-200'  type="checkbox" name="admin" value={admin} onChange={updateadmin}  />
                </label>
                <label >
                    <h1 className='mb-2 inline-block`   ' > year:</h1>
                    <input className='mb-8 border-2 border-gray-200 w-full h-[3rem]'  type="number" name="year" value={year} onChange={updateyear} />
                </label>
                
                <button className='mb-4 w-full border-2 border-red-300 h-[3rem] rounded-lg hover:bg-red-600 hover:text-white' type='Submit' onClick={submit} >Submit</button>
            </form>
        </div>
        <div className='h-[85svh] w-[50%]'>
            <motion.img 
            initial={{ y: 0, }} // Initial positions and rotations
            animate={{ y: [45,-45,45]}}
            transition={{
              duration: 4, 
              repeat: Infinity, 
              ease:"easeInOut", 
              yoyo: true, 
            }}
            src={src} className='h-full w-full'></motion.img>
        </div>
    </div>
  )
}

export default Login